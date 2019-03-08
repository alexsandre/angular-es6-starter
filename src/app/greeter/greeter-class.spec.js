import Greeter from "./greeter.class";

describe("Greeter instance", function() {
	it("has a greeting method that returns the message 'Hello, world!'", function() {
		let greeter = new Greeter();
		expect(greeter.greet()).toEqual("Hello, world!");
	});
});
