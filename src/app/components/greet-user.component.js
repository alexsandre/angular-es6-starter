class GreetUser {
	constructor() {
		this.translation = "Hello, world!";
	}
}

export default {
	template: `<h2>{{$ctrl.translation}}</h2>`,
	controller: GreetUser
};
