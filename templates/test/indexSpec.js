/*

System Under Test : Api exported by lib/index.js 

*/

var expect = require('chai').expect;
describe('Given the api module', function(){
    var api = require('../lib/index'),
        greeting;
    
    describe('When i call greet with a name', function(){
        beforeEach(function(){
            greeting = api.greet('Api Author');
        });
        
        it('Should return a "Hello name" greeting', function (){
            expect(greeting).to.eql("Hello Api Author");
        });
    });
    
     describe('When i call greet without a name', function(){
        beforeEach(function(){
            greeting = api.greet();
        });
        
        it('Should return a "Hello World" greeting', function (){
            expect(greeting).to.eql("Hello World");
        });
    });
    
});