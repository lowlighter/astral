import { assertRejects } from "@std/assert/assert-rejects";
import { assertEquals } from "@std/assert/assert-equals";
import { launch } from "../mod.ts";

Deno.test("Page - back and forth navigation works", async () => {
  const browser = await launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://example.com");
  await page.locator("a").click();
  await page.goBack();
  assertRejects(() => page.goBack(), "No history entry available");
  await page.goForward();
  assertRejects(() => page.goForward(), "No history entry available");
  await page.close();
  await browser.close();
});
