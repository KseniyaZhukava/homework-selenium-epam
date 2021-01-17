let webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
 
    let browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
 



    browser.get('https://pastebin.com/');