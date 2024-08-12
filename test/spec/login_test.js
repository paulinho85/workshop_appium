import { init, end } from "../../config.js";

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

    it.only('Login com email inválido', async () => {
        await driver.$('accessibility id:email').setValue('teste@teste.com')
    });
    
    it('Login com senha inválida', async () => {
        await driver.$('accessibility id:email').setValue('teste@teste.com')
    });

    it('Login com sucesso', async () => {        
        await driver.$('accessibility id:email').setValue('teste@teste.com')
    });
});