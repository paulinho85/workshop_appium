import { home_elements } from './home_page.js'
import { expect } from "chai";

// elementos
const elements = {
    errorMessage: {
        android: '//android.widget.TextView[@text="Erro ao realizar login"]',
        ios: '//XCUIElementTypeStaticText[@name="Erro ao realizar Login"]'
    },
    email_field: 'accessibility id:email',
    password_field: 'accessibility id:password',
    btn_login: 'accessibility id:login-button'

}

// ações
export async function preencherEmail(driver, email){
    await driver.$(elements.email_field).setValue(email);   
};

export async function preencherSenha(driver, senha){
    await driver.$(elements.password_field).setValue(senha);   
};

export async function cliqueEntrar(driver){
    await driver.$(elements.btn_login).click();
};

export async function validaLoginError(driver){
    const text = await driver.$(elements.errorMessage[process.env.PLATFORM]).getText();
    expect(text).to.equal("Erro ao realizar login");
}

export async function validaLoginSucesso(driver){
    //await driver.$(home_elements.search_field).isDisplayed();
    const el = await driver.$(home_elements.search_field).isDisplayed()
    expect(el).to.equal(true)
}