const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

class Pastebin {

    get newPasteField () { return this.browser.findElement(By.xpath(".//textarea[@id='postform-text']")) }
    get syntaxHigh () { return this.browser.findElement(By.xpath(".//span[@id='select2-postform-format-container']")) }
    get syntaxHighBash () { return this.browser.findElement(By.xpath(".//li[@class='select2-results__option']/preceding::li[text()='Bash']")) }
    get pasteExpiration () { return this.browser.findElement(By.xpath(".//span[@id='select2-postform-expiration-container']")) }
    get pasteExpiration10M () { return this.browser.findElement(By.xpath("//ul[@id='select2-postform-expiration-results']/li[text()='10 Minutes']")) }
    get titleName () { return this.browser.findElement(By.xpath(".//input[@id='postform-name']")) }
    get createbtn () { return this.browser.findElement(By.xpath("//button[text()='Create New Paste']")) }
    // Pageobjects for results page
    get tabTitle () { return this.browser.findElement(By.xpath("//div[@class='info-top']/h1")) }
    get containText () { return this.browser.findElement(By.xpath("//textarea[@class='textarea']")) }
    get syntaxBash () { return this.browser.findElement(By.xpath("//div[@class='left']/a")) }

    browser;
    constructor() {
        this.browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'chrome' }).build();
    }

    async open () {
        await this.browser.get('https://pastebin.com/');
        await this.browser.manage().window().maximize();
    }

    newPaste () {
        this.newPasteField.sendKeys('git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force');
    }

    async setSyntaxHigh () {
        await this.syntaxHigh.click();
        await this.syntaxHighBash.click();
    }

    async setPasteExpiration () {
        await this.pasteExpiration.click();
        await this.pasteExpiration10M.click();
    }

    async setTitle () {
        await this.titleName.sendKeys("how to gain dominance among developers");
    }

    async createNewPaste () {
        await this.createbtn.click();
    }

}

module.exports = new Pastebin();
