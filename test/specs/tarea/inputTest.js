import { browser, expect } from '@wdio/globals'

describe('Input numbers en Heroku', () => {
    it('probando input de numeros', async () => {
        await browser.url('https://the-internet.herokuapp.com/inputs');
 
        const input = await $('.example');
        await input.waitForDisplayed({ timeout: 5000 });

        await browser.pause(2000);

        await input.$('input').setValue('12345');
        await expect(input.$('input')).toHaveValue('12345');
        await browser.pause(2000);

        await input.$('input').clearValue();
        await expect(input.$('input')).toHaveValue('');
        await browser.pause(2000);

        await input.$('input').setValue('-12345');
        await expect(input.$('input')).toHaveValue('-12345');
        await browser.pause(2000);
        
        await input.$('input').clearValue();

        await input.$('input').setValue('12.345');
        await expect(input.$('input')).toHaveValue('12.345');
        await browser.pause(2000);

        await input.$('input').clearValue();

        await input.$('input').setValue('probando poner letras');
        await expect(input.$('input')).toHaveValue('probando poner letras');
        //solo deja poner la letra e y luego se queda pegado porque la e la toma como notación científica 

        await browser.pause(2000);
    });
});
