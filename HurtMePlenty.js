let webdriver = require('selenium-webdriver'),
    By = webdriver.By;

let browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'chrome' }).build();

browser.get('https://cloud.google.com/');
let SearchEl = browser.findElement(By.xpath(".//input[@class='devsite-search-field devsite-search-query']"))
let SearchRes = async function () {
    await SearchEl.click()
    await SearchEl.sendKeys("Google Cloud Platform Pricing Calculator")
    await SearchEl.sendKeys(webdriver.Key.ENTER)
}

let OpenPg = async function () {
    await SearchRes()
    await browser.findElement(By.xpath("//a[@class='gs-title']")).click()
}

OpenPg()


// let a = browser.findElement(By.xpath(".//input[@class='devsite-search-field devsite-search-query']"));
// a.click();
// a.sendKeys("Google Cloud Platform Pricing Calculator").then(
//     () => a.sendKeys(webdriver.Key.ENTER).then(() => 
//     browser.findElement(By.xpath("//div[@class='gsc-expansionArea']/a[@class='gs-title']")).click())
// )
// browser.findElement(By.xpath("//div[@class='gsc-expansionArea']/div/div/div/div/a[@class='gs-title']")).click();

// gsc-expansionArea