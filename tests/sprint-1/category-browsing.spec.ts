import { test, expect } from '@playwright/test';

type Category = {
  id: number;
  parent_id: number | null;
  name: string;
  slug: string;
  sub_categories: Category[];
};

test('visitor can browse products by category', async ({ page, request }) => {
  const categoriesResponse = await request.get('https://api-v1.practicesoftwaretesting.com/categories/tree');

  expect(categoriesResponse.ok()).toBeTruthy();

  const categories: Category[] = await categoriesResponse.json();

  const category = categories.find(category => category.sub_categories.length > 0);

 if (!category) 
    {throw new Error('No root category with subcategories was found');}

  await page.goto('/');

  const categoryLink = page.getByRole('link', {name: category.name, exact: true});

const categoryHref = await categoryLink.getAttribute('href');

if (!categoryHref) {
  throw new Error(`Category link "${category.name}" has no href`);
}
await categoryLink.click();

const escapedCategoryHref = categoryHref.replace(
  /[.*+?^${}()|[\]\\]/g,
  '\\$&'
);

const expectedUrlPattern = new RegExp(`${escapedCategoryHref}$`);

await expect(page).toHaveURL(expectedUrlPattern);

await expect( page.getByRole('heading', { name: `Category: ${category.name}`, exact: true})).toBeVisible();
});