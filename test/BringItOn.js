const pastebin = require('../pageobjects/BringItOn');
const webdriver = require('selenium-webdriver'),
    // { describe, it, after, before } = require('selenium-webdriver/testing'),
    By = webdriver.By,
    until = webdriver.until;
const assert = require('chai').assert;

describe('open pastebin home page', function () {
    this.timeout(100000);
    this.beforeAll(() => {
        pastebin.open();
    })

    it('Text in the textarea', async function () {
        // setTimeout(() => {
        pastebin.newPaste();
        // let checkText = await pastebin.newPasteField.getText();
        // assert.equal(checkText, 'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force', "Text does not match")
        // // }, 5000);   
    })

    it('The syntax is suspended for Bash', async function () {
        // setTimeout(() => {
        await pastebin.setSyntaxHigh();
        let checkSyntax = await pastebin.syntaxHigh.getText();
        assert.equal(checkSyntax, "Bash", 'SyntaxHigh does not match');
        // }, 5000);
    });

    it('pasteExpiration = 10 Minutes', async function () {
        // setTimeout(() => {
        await pastebin.setPasteExpiration();
        let checkExpiration = await pastebin.pasteExpiration.getText();
        assert.equal(checkExpiration, "10 Minutes", 'pasteExpiration does not match');
        // }, 5000);
    });

    it('Text of title contains "Title"', async function () {
        // setTimeout(() => {
        await pastebin.setTitle();
        let checkTitle = await pastebin.titleName.getText();
        console.log('qwe'+ checkTitle );
        assert.equal(checkTitle, "how to gain dominance among developers", "Title name does not match");
        // }, 5000);
    });

    it('Create new paste', function () {
        pastebin.createNewPaste();
    });

    // it('Title contains Paste NAme', async function () {
    //     setTimeout(() => {
    //     let getTabTitle = pastebin.tabTitle.getText();
    //     assert.equal(getTabTitle, "how to gain dominance among developers", "Title name does not match");
    //     }, 5000);
    // })

    // it('Textarea contains Code', function () {
    //     setTimeout(() => {
    //     let getCode = pastebin.containText.getText();
    //     assert.equal(getCode, 'git config --global user.name  "New Sheriff in Town"\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")\ngit push origin master --force', "Code does not match");
    //     }, 5000);
    // })

    // it('Syntax = Bash', function () {
    //     setTimeout(() => {
    //     let getSyntax = pastebin.syntaxBash.getText();
    //     assert.equal(getSyntax, "Bash", "Syntax does not match");
    //     }, 5000);
    // })

});