import Greeter from "./greeter.class";

describe("Greeter class", function() {
	it("is defined", function() {
		expect(Greeter).toBeDefined();
	});

	it("is instantiable", function() {
		let greeter = new Greeter();
		expect(greeter).toBeDefined();
	});

	it("has a language property that is defined", function() {
		let greeter = new Greeter();
		greeter.language = "en";

		expect(greeter.language).toBeDefined();
		expect(greeter.language).toBe("en");
	});

	it("has a greet method that is defined", function() {
		let greeter = new Greeter();
		expect(greeter.greet).toBeDefined();
	});

	it("has a greet method that will return undefined if language is set to a language not specified within translation service", function() {
		let translationService = {
			"en": "Hello, world!",
			"es": "¡Hola Mundo!",
			"fr": "Bonjour le monde!",
			"ru": "Привет, мир!"
		};

		let greeter = new Greeter(translationService);
		greeter.language = "zh";

		expect(greeter.language).toBe("zh");
		expect(greeter.greet()).toBeUndefined();
	});

	it("has a greet method that will return translated 'Hello, world!' messages if language is set to a language specified within translation service", function() {
		let translationService = {
			"en": "Hello, world!",
			"es": "¡Hola Mundo!",
			"fr": "Bonjour le monde!",
			"ru": "Привет, мир!"
		};

		let greeter = new Greeter(translationService);

		greeter.language = "en";
		expect(greeter.language).toBe("en");
		expect(greeter.greet()).toBe("Hello, world!");

		greeter.language = "es";
		expect(greeter.language).toBe("es");
		expect(greeter.greet()).toBe("¡Hola Mundo!");

		greeter.language = "fr";
		expect(greeter.language).toBe("fr");
		expect(greeter.greet()).toBe("Bonjour le monde!");

		greeter.language = "ru";
		expect(greeter.language).toBe("ru");
		expect(greeter.greet()).toBe("Привет, мир!");
	});
});
