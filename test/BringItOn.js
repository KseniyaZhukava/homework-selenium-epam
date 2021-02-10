const pastebin = require('../pageobjects/BringItOn');
const webdriver = require('selenium-webdriver'),
    // { describe, it, after, before } = require('selenium-webdriver/testing'),
    By = webdriver.By,
    until = webdriver.until;
const assert = require('chai').assert;

describe('open pastebin home page', function () {

    this.beforeAll(() => {
        pastebin.open();
    })

    it('Text in the textarea', function () {
        pastebin.newPaste();
        checkText = pastebin.newPasteField().getText();
        assert.equal(checkText, 'git config --global user.name  "New Sheriff in Town" git reset $(git commit-tree HEAD^{tree} -m "Legacy code") git push origin master --force', "Text does not match")
    })

    it('The syntax is suspended for Bash', function(){
        pastebin.setSyntaxHigh();
        checkSyntax = pastebin.syntaxHigh().getText();
        assert.equal(checkSyntax, "Bash", 'SyntaxHigh does not match');
    });

    it('pasteExpiration = 10 Minutes', function(){
        pastebin.setPasteExpiration();
        checkExpiration = pastebin.pasteExpiration().getText();
        assert.equal(checkExpiration, "10 Minutes", 'pasteExpiration does not match');
    });

    it('Text of title contains "Title"', function () {
        pastebin.setTitle();
        checkTitle = pastebin.titleName.getText();
        assert.equal(checkTitle, "how to gain dominance among developers", "Title name does not match");
    });

    it('works with mocha', function () {

    });

});

// document.title