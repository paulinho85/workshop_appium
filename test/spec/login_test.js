import { init, end } from "../../config.js";
import { expect } from "chai";
import { cliqueEntrar, preencherEmail, preencherSenha, validaLoginError, validaLoginSucesso } from "../pages/login_page.js";

describe('Login', () => {

    let driver = null

    beforeEach(async function () {
        console.log('********************************************')
        console.log('Iniciando execução para: ' + process.env.PLATFORM)
        console.log('********************************************')
        driver = await init(process.env.PLATFORM)
    });

    after(async function () {
        await end(driver)        
    });

    
    it('Login com email inválido', async () => {
        await preencherEmail(driver, "error@teste.com")
        await preencherSenha(driver, "123456")
        await cliqueEntrar(driver)
        await validaLoginError(driver)        
    });
    
    it('Login com senha inválida', async () => {
        await preencherEmail(driver, "teste@teste.com")
        await preencherSenha(driver, "xxxxxx")
        await cliqueEntrar(driver)
        await validaLoginError(driver)   
    });

    it('Login com email e senha vazios', async () => {      
        await cliqueEntrar(driver)
        await validaLoginError(driver)   
    });

    it('Login com sucesso', async () => {        
        await preencherEmail(driver, 'teste@teste.com')
        await preencherSenha(driver, '123456')
        await cliqueEntrar(driver)
        await validaLoginSucesso(driver)
    });
});