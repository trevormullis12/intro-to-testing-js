// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit tests for the sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });
    //the input is null?
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    // the input is an empty string like ""?
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    // the input is a number like 2.3?
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    // the input is a number inside a string like "5"?
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("5")).toBe("Hello, World!");
    });
});

// Unit tests for isFive function
describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when executed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when input is the string "5"', function () {
        expect(isFive("5")).toBe(true);
    });
});

// Unit tests for isEven function
describe('isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    // returns a boolean no matter the input
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    // returns true when executed with isEven(2)
    it('should return true when executed with isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });
    // returns true when executed with isEven(-4)
    it('should return a true when executed with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });
    // returns false when executed with isEven(3)
    it('should return a false when executed with isEven(3)', function () {
        expect(isEven(3)).toBe(false);
    });
    // returns false when called with isEven("banana")
    it('should return a false when executed with isEven("banana")', function () {
        expect(isEven("banana")).toBe(false);
    });
    // returns true when called with isEven("8")
    it('should return a true when executed with isEven(8)', function () {
        expect(isEven(8)).toBe(true);
    });
    // returns false when called with isEven(Infinity)
    it('should return a false when executed with isEven(8)', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    // return false when called with a boolean input like isEven(true) or isEven(false)
    it('should return a false when executed with isEven(true)', function () {
        expect(isEven(true)).toBe(false);
    });
    // returns false when called without an argument like isEven()
    it('should return a false when executed with isEven()', function () {
        expect(isEven()).toBe(false);
    });

});

// Unit tests for isVowel function
describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    // returns a boolean no matter the input
    it('should return a boolean when called', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    // returns true when executed with isEven(2)
    it('should return true when executed with isVowel("a")', function () {
        expect(isVowel("a")).toBe(true);
    });
    // isVowel("A") returns true
    it('should return true when executed with isVowel("A")', function () {
        expect(isVowel("A")).toBe(true);
    });
    // isVowel("y") returns false
    it('should return false when executed with isVowel("y")', function () {
        expect(isVowel("y")).toBe(false);
    });
    // isVowel(4) returns false
    it('should return false when executed with isVowel(4)', function () {
        expect(isVowel(4)).toBe(false);
    });
    // isVowel(true) or isVowel(false) both return false
    it('should return false when executed with isVowel(true)', function () {
        expect(isVowel(true)).toBe(false);
    });
    // isVowel("banana") returns false
    it('should return false when executed with isVowel("banana")', function () {
        expect(isVowel("banana")).toBe(false);
    });
    // isVowel() returns false
    it('should return false when executed with isVowel()', function () {
        expect(isVowel()).toBe(false);
    });
});