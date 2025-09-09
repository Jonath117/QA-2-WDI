import { $, browser, expect } from '@wdio/globals'

describe('entryAD en Heroku', () => {
    it('entryAD', async () => {
        await browser.url('https://the-internet.herokuapp.com/entry_ad');
        
        //hay un <a href="id restart-ad"> Close <a/> para clickear y habilitar en las siguientes recargas
        const enableAd = await $('#restart-ad');
        await enableAd.waitForDisplayed({ timeout: 5000 });

        //el modal tiene un id llamado modal
        const modal = await $('#modal');
        await modal.waitForDisplayed({ timeout: 5000 });

        //el modal tiene un <p>Close</p> para cerrarlo dentro de un class=footer
        await browser.pause(2000);
        
        const closeModal = await modal.$('.modal-footer').$('p=Close');
        await closeModal.waitForDisplayed({ timeout: 5000 });

        closeModal.click();
        await expect(modal).not.toBeDisplayed();

        await browser.pause(2000);

        
        await browser.refresh();
        await expect(modal).not.toBeDisplayed();
        await browser.pause(2000);


        enableAd.click();
        await browser.pause(2000);
        await browser.refresh();
        await expect(modal).toBeDisplayed();
        await browser.pause(2000);
    

    });
});
