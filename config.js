import { remote } from "webdriverio"

    
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

export async function init(platform) {
    return await remote({        
        hostname: '127.0.0.1',
        port: 4723,
        path: '/', //Certirique-se de que o path está correto
        capabilities: platform == 'android' ? androidCapabilities : iOSCapabilities
    })
        .catch(err => console.log('Erro ao iniciar o Appium', err))    
}

export async function end(driver) {
    await driver.deleteSession()    
}