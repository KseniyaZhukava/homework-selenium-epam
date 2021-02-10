const webdriver = require('selenium-webdriver'),
    // { describe, it, after, before } = require('selenium-webdriver/testing'),
    By = webdriver.By,
    until = webdriver.until;
class Pastebin {

    get newPasteField () { return ".//textarea[@id='postform-text']" }
    get syntaxHigh () { return ".//span[@id='select2-postform-format-container']" }
    get syntaxHighBush () { return ".//li[@class='select2-results__option']/preceding::li[text()='Bash']" }
    get pasteExpiration () { return ".//span[@id='select2-postform-expiration-container']" }
    get pasteExpiration10M () { return "//ul[@id='select2-postform-expiration-results']/li[text()='10 Minutes']" }
    get titleName () { return ".//input[@id='postform-name']" }
    get createbtn () { return "//button[text()='Create New Paste']" }

    browser;
    constructor() {
        this.browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'chrome' }).build();
    }

    open () {
        this.browser.get('https://pastebin.com/');
    }

    newPaste () {
        this.browser.findElement(By.xpath(this.newPasteField)).sendKeys('git config --global user.name  "New Sheriff in Town"', webdriver.Key.ENTER, 'git reset $(git commit-tree HEAD^{tree} -m "Legacy code")', webdriver.Key.ENTER, 'git push origin master --force');
    }

    async setSyntaxHigh () {
        await this.browser.findElement(By.xpath(this.syntaxHigh)).click();
        await this.browser.findElement(By.xpath(this.syntaxHighBush)).click();
    }

    async setPasteExpiration () {
        await this.browser.findElement(By.xpath(this.pasteExpiration)).click();
        await this.browser.findElement(By.xpath(this.pasteExpiration10M)).click();
    }

    setTitle () {
        this.browser.findElement(By.xpath(this.titleName)).sendKeys("how to gain dominance among developers");
    }

    createNewPaste () {
        scroll(this.createbtn);
        this.browser.findElement(By.xpath(this.createbtn)).click();
    }
}

module.exports = new Pastebin();
