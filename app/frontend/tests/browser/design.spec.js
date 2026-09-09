import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const language of ['es', 'en']) {
  for (const theme of ['dark', 'light']) {
    for (const width of [390, 768, 1440]) {
      test(`${language} ${theme} ${width}: layout, contrast and project navigation`, async ({ page }, testInfo) => {
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.setViewportSize({ width, height: 900 });
        await page.addInitScript(value => localStorage.setItem('portfolio-tema', value), theme);
        await page.goto(`/${language}`);
        await expect(page.locator('h1')).toHaveText('Cristhian Loor');
        await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
        await expect(page.locator('html')).toHaveAttribute('data-theme', theme);
        await expect(page.locator('html')).toHaveAttribute('lang', language);
        await expect.poll(() => page.locator('.saltar-contenido').evaluate(n => n.getBoundingClientRect().bottom)).toBeLessThanOrEqual(0);
        await page.screenshot({ path: testInfo.outputPath('viewport.png') });

        const tab = page.locator('#selector-ibatch');
        await tab.focus();
        await page.keyboard.press('ArrowRight');
        await expect(page.locator('#selector-banco-horizonte')).toBeFocused();
        await expect(page.locator('#panel-proyecto h3')).toContainText('Banco Horizonte');
        await page.keyboard.press('End');
        await expect(page.locator('#selector-pos-api')).toBeFocused();
        await expect(page.locator('.proyecto-demo-pendiente')).toHaveText(language === 'es' ? 'Demo próximamente' : 'Demo coming soon');
        await page.keyboard.press('Home');
        await expect(page.locator('.proyecto-enlaces .boton-principal')).toBeVisible();

        if (width < 761) {
          await page.locator('.menu-boton').click();
          await expect(page.locator('.menu')).toBeVisible();
          await page.keyboard.press('Escape');
          await expect(page.locator('.menu-boton')).toBeFocused();
          await expect(page.locator('.menu')).toBeHidden();
        }

        const audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
        expect(audit.violations.map(v => ({ id: v.id, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) }))).toEqual([]);
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
        const cards = await page.locator('.categoria-tecnica').evaluateAll(nodes => nodes.map(n => n.getBoundingClientRect().width));
        expect(Math.max(...cards) - Math.min(...cards)).toBeLessThan(2);
        expect(errors).toEqual([]);

        for (const selector of ['.hero', '#proyectos', '#tecnologias', '.metodologia', '#formacion', '#sobre-mi']) {
          await page.locator(selector).screenshot({ path: testInfo.outputPath(`${selector.replace(/[.#]/g, '')}.png`), style: '.cabecera, .progreso-lectura { visibility: hidden; }' });
        }
      });
    }
  }
}

test('intermediate widths reflow without clipped controls', async ({ page }) => {
  await page.goto('/es');
  for (const width of [320, 360, 480, 600, 760, 761, 900, 1080, 1081, 1280, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    expect(await page.locator('.hero-acciones a, .nav-utilidades button, .categoria-tecnica').evaluateAll(nodes => nodes.every(n => n.scrollWidth <= n.clientWidth + 1))).toBe(true);
  }
});

test('default motion, skip link, theme and language controls remain usable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/es');
  await expect(page.locator('h1')).toBeVisible();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await page.keyboard.press('Tab');
  await expect(page.locator('.saltar-contenido')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#contenido-principal')).toBeFocused();
  await page.locator('.nav-idioma').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  const before = await page.locator('html').getAttribute('data-theme');
  await page.locator('.nav-tema').click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', before === 'dark' ? 'light' : 'dark');
  await page.locator('#tecnologias').scrollIntoViewIfNeeded();
  await expect(page.locator('.categoria-testing')).toHaveCSS('opacity', '1');
});
