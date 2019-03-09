import $ from "jquery";
import Greeter from "./greeter/greeter.class";

$(function() {
	let translationService = {
		"en": "Hello, world!",
		"es": "¡Hola Mundo!",
		"fr": "Bonjour le monde!",
		"ru": "Привет, мир!"
	};

	let greeter = new Greeter(translationService);
	let h1 = $("<h1/>");
	let dropdown = $("<select/>").append(function() {
		let options = $("<optgroup label='Languages'/>");
		for (let language in translationService) {
			if (translationService.hasOwnProperty(language)) {
				let option = $("<option/>")
					.text(language.toUpperCase())
					.val(language);
				option.appendTo(options);
			}
		}

		return options;
	});

	dropdown.on("change", function() {
		greeter.language = dropdown.val();
		h1.text(greeter.greet());
	});

	h1.prependTo(document.body);
	dropdown.trigger("change").prependTo(document.body);
});
