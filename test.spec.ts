import { test, FirefoxBrowser, expect, firefox } from '@playwright/test';
test('To lauch the browser and URL', async () => {
    const browser = await firefox.launch({ headless: false, channel: 'firefox' })
    const context1 = await browser.newContext();
    const page = await context1.newPage();

    await page.goto("https://testomat.io/");
    const url = page.url();
    expect(url).toContain("https://testomat.io/");
    const title = await page.title();
    console.log("The title of the page is:" + title)

    page.close();
    context1.close();
    browser.close();
});