const pastebin = require('../pageobjects/BringItOn');
const assert = require('chai').assert;

describe('open pastebin home page', function () {
    this.timeout(100000);
    this.beforeAll( async () => {
        await pastebin.open();
    })

    // this.afterAll(() => {
    //     pastebin.browser.quit();
    // })

    it('Text in the textarea', async function () {
        pastebin.newPaste();
        let checkText = await pastebin.newPasteField.getAttribute("value");
        assert.equal(checkText, 'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force', "Text does not match") 
    })

    it('The syntax is suspended for Bash', async function () {
        await pastebin.setSyntaxHigh();
        let checkSyntax = await pastebin.syntaxHigh.getText();
        assert.equal(checkSyntax, "Bash", 'SyntaxHigh does not match');
    });

    it('pasteExpiration = 10 Minutes', async function () {
        await pastebin.setPasteExpiration();
        let checkExpiration = await pastebin.pasteExpiration.getText();
        assert.equal(checkExpiration, "10 Minutes", 'pasteExpiration does not match');
    });

    it('Text of title contains "Title"', async function () {
        await pastebin.setTitle();
        let checkTitle = await pastebin.titleName.getAttribute("value");
        assert.equal(checkTitle, "how to gain dominance among developers", "Title name does not match");
    });

    it('Create new paste', async function () {
        await pastebin.createNewPaste();
        await pastebin.browser.sleep(10000);
    });

    it('Textarea contains Code', async function () {
        let getCode = await pastebin.containText.getText();
        assert.equal(getCode, 'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force', "Code does not match");
    })

    it('Syntax = Bash', async function () {
        let getSyntax = await pastebin.syntaxBash.getText();
        assert.equal(getSyntax, "Bash", "Syntax does not match");
    })

    it('Title contains Paste Name', async function () {
        let getTabTitle = await pastebin.browser.getTitle();
        assert.isTrue(getTabTitle.includes('how to gain dominance among developers'), 'Title does not contain Paste Name');
    })

});