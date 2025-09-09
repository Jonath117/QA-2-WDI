import { $, browser, expect } from '@wdio/globals'

describe('contextMenu en Heroku', () => {
    it('contextMenu', async () => {
        await browser.url('https://the-internet.herokuapp.com/context_menu');
        
        const boxbox = await $('#hot-spot');
        await boxbox.waitForDisplayed({ timeout: 5000 });

        await browser.pause(2000);

        boxbox.click({ button: 'right' });

        await browser.waitUntil(
            async () => await browser.isAlertOpen(),
            { timeout: 5000, timeoutMsg: 'esperando alerta' }
        );

        await expect(await browser.getAlertText()).toBe('You selected a context menu');

        await browser.pause(2000);


    });
});
