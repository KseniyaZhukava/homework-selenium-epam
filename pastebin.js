var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
 
    var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();
 



    browser.get('https://pastebin.com/');