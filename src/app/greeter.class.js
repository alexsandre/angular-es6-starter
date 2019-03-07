export default function Greeter() {
	var thus = this;
	thus.message = "Hello, world!";
	Object.defineProperty(Greeter.prototype, "greet", {
		value: function() {
			return thus.message;
		}
	});
}
