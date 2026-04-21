import { expect, test } from '@playwright/test';

test('lesson mini-checks and completion reveal exact next moves', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.removeItem('soroban-dojo:completed-lessons');
  });

  await page.goto('/ai-soroban/lessons/l4/first-multiplication-patterns');

  await expect(page.locator('#lesson-complete-next')).toBeHidden();

  const miniInput = page.locator('.lesson-mini-input').first();
  await miniInput.fill('12');
  await page.getByRole('button', { name: 'Check' }).first().click();
  await expect(page.locator('.lesson-mini-feedback').first()).toContainText('Correct');

  await page.getByRole('button', { name: 'Mark lesson complete' }).click();
  await expect(page.locator('#lesson-complete-next')).toBeVisible();

  await page.getByRole('link', { name: 'Matching worksheet' }).click();
  await expect(page).toHaveURL(/preset=multiplication-focus/);
});
