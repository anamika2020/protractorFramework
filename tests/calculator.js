let homepage = require('../pages/homepage');

describe('demo calculation test', function () {

    it('addtion test', function () {


        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumer('10');

        homepage.enterSecondNumber('20');

        homepage.clickGo();


        browser.sleep(8000)


    });

    it('substraction test', function () {


        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumer('10');

        homepage.enterSecondNumber('20');

        homepage.clickGo1();


        browser.sleep(8000)


    });



}); 