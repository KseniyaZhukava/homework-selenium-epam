let webdriver = require('selenium-webdriver'),
    By = webdriver.By;

let browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'chrome' }).build();

browser.get('https://pastebin.com/');
browser.findElement(By.id('postform-text')).sendKeys("Hello from WebDriver");
browser.findElement(By.id('postform-name')).sendKeys("helloweb");
browser.findElement(By.id('select2-postform-expiration-container')).click().then(() => {
   return browser.findElement(By.xpath(".//ul[@id='select2-postform-expiration-results']/li[text()='10 Minutes']")).click().then(
       () =>  browser.findElement(By.xpath(`//button[text()='Create New Paste']`)).click()
    );
});