const { remote } = require("webdriverio")
const assert = require('assert');

// Configurar as capabilities (necessidades) do appium
const androidCapabilities = {
    "appium:platformName": "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "a21ad1ae",
    "appium:app": "D:\\Documentos\\Projetos_GitHub\\workshop-appium\\apps\\app-release.apk",
    "appium:appPackage": "com.qazandoqafood",
    "appium:appActivity": ".MainActivity"    
}

const iOSCapabilities = {
    "appium:platformName": "iOS",
    "appium:automationName": "XCUITest",
    "appium:deviceName": "iphone 11",
    "appium:platformVersion": "15.2",
    "appium:app": "D:\\Documentos\\Projetos_GitHub\\workshop-appium\\apps\\app-release.apk",
    "appium:noReset": false,
}


// Configurar o WebDriverIO/Appium
const optionsAppiumServer = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/', //Certirique-se de que o path está correto
    capabilities: androidCapabilities
}

// Criar meu cenário de testes
// iniciar meu appium
async function runTest() {
    const driver = await remote(optionsAppiumServer)
    
    await driver.$('accessibility id:email').setValue('teste@teste.com')
    await driver.$('accessibility id:password').setValue('123456')
    await driver.$('accessibility id:login-button').click()

    await driver.pause(3000)

    const campoSearch = await driver.$('accessibility id:search-field')
    assert(campoSearch, "O campo de pesquisa deveria estar visíviel")        

    await driver.pause(1000)
    await driver.deleteSession()
}    

async function runTest2() {
    const driver = await remote(optionsAppiumServer)

    await driver.$('accessibility id:email').setValue('teste@teste.com')
    await driver.$('accessibility id:password').setValue('123456')
    await driver.$('accessibility id:login-button').click()

    await driver.pause(3000)
    await driver.$('accessibility id:address-button').click()    
    await driver.$('id:android:id/button1').click()    
    

    await driver.pause(1000)
    await driver.deleteSession()
}

// Chamar o cenário de teste
runTest()
//runTest2()