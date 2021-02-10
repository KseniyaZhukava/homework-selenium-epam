let webdriver = require('selenium-webdriver'),
    By = webdriver.By;

let browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'chrome' }).build();

browser.get('https://cloud.google.com/');
let SearchEl = browser.findElement(By.xpath(".//input[@class='devsite-search-field devsite-search-query']"));
let SearchRes = async function () {
    await SearchEl.click();
    await SearchEl.sendKeys("Google Cloud Platform Pricing Calculator", webdriver.Key.ENTER);
}

let OpenPg = async function () {
    await SearchRes();
    setTimeout(() => browser.findElement(By.xpath(".//div[@class='gsc-expansionArea']/descendant::a[@class='gs-title'][1]")).click(), 5000);
}

OpenPg()