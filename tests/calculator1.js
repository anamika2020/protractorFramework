describe('demo calculation test', function(){

    it('addtion test', function(){

        browser.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendkeys('2');
       
       // var element = form.findElement(By.('input[type=file]'));

        var input1 = element(by.model('first')).sendKeys('5');

        var input2 = element(by.model('second')).sendKeys('10');
        //element(by.model('second')).sendkeys('5');
        
        element(by.css('[ng-click="doAddition()"]')).click();
        browser.sleep(8000)


    });


}); 