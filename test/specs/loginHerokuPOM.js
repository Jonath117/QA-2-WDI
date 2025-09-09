import { expect } from '@wdio/globals'
import LoginPage from '../PageObjects/loginPage.js'
import SecurePage from '../PageObjects/securePage.js'

describe('Login en HerokuApp con POM', () => {
    beforeEach(async() => {
        await LoginPage.open()
    })

    it('Debe iniciar sesión exitosamente con credenciales válidas', async () => {
        //await LoginPage.open()
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')

        await SecurePage.isMessageDisplayed('You logged into a secure area!')
    })

    it('Debe fallar el login con credenciales inválidas', async () => {
    //await LoginPage.open()

    //await $('#username').setValue('usuario_invalido');
    //await $('#password').setValue('clave_invalida');
    //await $('button[type="submit"]').click();

    await LoginPage.login('usuario_invalido', 'clave_invalida');

    //const errorMessage = await $('#flash');
    //await expect(errorMessage).toBeDisplayed();
    //await expect(errorMessage).toHaveTextContaining('Your username is invalid!');
    //await expect(await errorMessage.getText()).toContain('Your username is invalid!');

    await SecurePage.isMessageDisplayed('Your username is invalid!');
});
})