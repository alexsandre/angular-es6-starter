export default class Greeter {
	constructor(translationService) {
		this.translationService = translationService;
	}

	get language() {
		return this._language;
	}

	set language(language) {
		this._language = language;
	}

	greet() {
		return this.translationService[this.language];
	}
}
