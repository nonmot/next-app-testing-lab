import { test, expect } from "@playwright/test";

test(" ダッシュボードに My App のヘッダーが表示される", async ({ page }) => {
  await page.goto("/dashboard");

  await expect(page.getByRole("banner")).toBeVisible();

  await expect(page.getByRole("heading", { name: "My App" })).toBeVisible();
});

test("「設定タブ」をクリックするとURLが変わる", async ({ page }) => {
  await page.goto("/dashboard?tab=home");

  await page.getByRole("button", { name: "設定タブへ" }).click();

  await expect(page).toHaveURL("/dashboard?tab=settings");
})
