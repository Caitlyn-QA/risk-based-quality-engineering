import { test, expect } from '@playwright/test';

type Category = {
  id: number;
  parent_id: number | null;
  name: string;
  slug: string;
  sub_categories: Category[];
};

type Product = {
  id: number;
  name: string;
  category: {
    id: number;
    parent_id: number;
    name: string;
    slug: string;
  };
};

test('visitor can browse products by category', async ({ page, request }) => {
  const categoriesResponse = await request.get('https://api-v1.practicesoftwaretesting.com/categories/tree');

  expect(categoriesResponse.ok()).toBeTruthy();

  const categories: Category[] = await categoriesResponse.json();

  const category = categories.find(category => category.sub_categories.length > 0);

  if (!category) { throw new Error('No root category with subcategories was found'); }

  await page.goto('/');

  const categoryLink = page.getByRole('link', { name: category.name, exact: true });

  const categoryHref = await categoryLink.getAttribute('href');

  if (!categoryHref) {
    throw new Error(`Category link "${category.name}" has no href`);
  }
  await categoryLink.click();

  const escapedCategoryHref = categoryHref.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');

  const expectedUrlPattern = new RegExp(`${escapedCategoryHref}$`);

  await expect(page).toHaveURL(expectedUrlPattern);

  await expect(page.getByRole('heading', { name: `Category: ${category.name}`, exact: true })).toBeVisible();
});

test('only products from the selected category are displayed', async ({ page, request }) => {
  const categoriesResponse = await request.get('https://api-v1.practicesoftwaretesting.com/categories/tree');

  expect(categoriesResponse.ok()).toBeTruthy();

  const categories: Category[] = await categoriesResponse.json();

  const category = categories.find(category => category.sub_categories.length > 0);

  if (!category) { throw new Error('No root category with subcategories was found'); }

  const productsResponse = await request.get(`https://api-v1.practicesoftwaretesting.com/products?by_category_slug=${category.slug}`);

  expect(productsResponse.ok()).toBeTruthy();

  const expectedProducts: Product[] = await productsResponse.json();

  await page.goto('/');

  const categoryLink = page.getByRole('link', { name: category.name, exact: true });

  await categoryLink.click();

  const displayedProducts = page.locator('a[data-test^="product-"][href^="#/product/"]');

  await expect(displayedProducts).toHaveCount(expectedProducts.length);

  const displayedProductHrefs = await displayedProducts.evaluateAll(products => products.map(product => product.getAttribute('href')));

  const displayedProductIds = displayedProductHrefs.map(href => {
    if (!href) {
      throw new Error('A product has no href');
    }

    const displayedProductId = Number(href.split('/').pop());

    if (Number.isNaN(displayedProductId)) {
      throw new Error(`Could not extract product ID from href: ${href}`);
    }

    return displayedProductId;
  });

  const expectedProductIds = expectedProducts.map(product => product.id);

  expect([...displayedProductIds].sort((a, b) => a - b))
    .toEqual([...expectedProductIds].sort((a, b) => a - b));

});