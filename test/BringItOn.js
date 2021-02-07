const assert = require('chai').assert;
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

let browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'chrome' }).build();
    browser.get('https://pastebin.com/');

NewPasteText = browser.findElement(By.id('postform-text')).sendKeys('git config --global user.name  "New Sheriff in Town"', webdriver.Key.ENTER, 'git reset $(git commit-tree HEAD^{tree} -m "Legacy code")', webdriver.Key.ENTER, 'git push origin master --force');
TitleText = browser.findElement(By.id('postform-name')).sendKeys("how to gain dominance among developers");
SyntaxHighlighting = browser.findElement(By.id('select2-postform-format-container'))
SyntaxHighlightingBash = browser.findElement(By.xpath(".//li[@class='select2-results__option']/preceding::li[text()='Bash']"))
PasteExpiration = browser.findElement(By.id('select2-postform-expiration-container'))
PasteExpiration10M = browser.findElement(By.xpath("//ul[@id='select2-postform-expiration-results']/li[text()='10 Minutes']"))

    
let selectSmt = async function () {
    await SyntaxHighlighting.click();
    await SyntaxHighlightingBash.click();    
}
    
let selectSmt2 = async function () {
    await PasteExpiration.click();
    await PasteExpiration10M.click();
}
    
let selectSmt3 = async function () {
    await selectSmt();
    await selectSmt2();
}
    
selectSmt3().then(
    () => browser.findElement(By.xpath("//button[text()='Create New Paste']")).click()
);

describe('open pastebin home page', function () {
    it('The syntax is suspended for bash', function(){
        SyntaxHighlight = browser.findElement(By.xpath(".//div[@class='left']/a[@class='btn -small h_800']")).getText();
        assert.equal(SyntaxHighlight, 'Bash');
    });

    it('Text of title contains Title', function () {
        TabTitle = browser.findElement(By.xpath(".//title[text()='how to gain dominance among developers']")).getTitle();
        assert.equal(TabTitle, "how to gain dominance among developers", "Text of title is wrong");
    });

    //     it('works with mocha', function(){
    //         browser.findElement(By.id('select2-postform-expiration-container')).click();
    //         browser.findElement(By.xpath("//ul[@id='select2-postform-expiration-results']/li[text()='10 Minutes']")).click();
    //     });

    //     it('works with mocha', function(){

    //     });

    })