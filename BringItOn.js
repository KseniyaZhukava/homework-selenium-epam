var webdriver = require('selenium-webdriver'),
    By = webdriver.By;

var browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'chrome' }).build();

browser.get('https://pastebin.com/');
browser.findElement(By.id('postform-text')).sendKeys('git config --global user.name  "New Sheriff in Town"', webdriver.Key.ENTER, 'git reset $(git commit-tree HEAD^{tree} -m "Legacy code")', webdriver.Key.ENTER, 'git push origin master --force');
browser.findElement(By.id('postform-name')).sendKeys("how to gain dominance among developers");
    
    
let selectSmt = async function () {
    await browser.findElement(By.id('select2-postform-format-container')).click();
    await browser.findElement(By.xpath(".//li[@class='select2-results__option']/preceding::li[text()='Bash']")).click();    
}
    
let selectSmt2 = async function () {
    await browser.findElement(By.id('select2-postform-expiration-container')).click();
    await browser.findElement(By.xpath("//ul[@id='select2-postform-expiration-results']/li[text()='10 Minutes']")).click();
}
    
let selectSmt3 = async function () {
    await selectSmt();
    await selectSmt2();
}
    
selectSmt3().then(
    () => browser.findElement(By.xpath("//button[text()='Create New Paste']")).click()
)


