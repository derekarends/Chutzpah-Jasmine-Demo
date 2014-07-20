/// <reference path="jasmine.js"/>
/// <reference path="../../ChutzpahDemo/app/Calculator.js"/>

describe("Calculator.Add", function() {
    it("can add two numbers", function() {
        var result = new Calculator().add(2, 3);
        expect(result).toBe(5);
    });
});