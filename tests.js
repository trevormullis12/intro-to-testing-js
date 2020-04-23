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