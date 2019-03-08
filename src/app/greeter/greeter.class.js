export default function Greeter() {
	var inst = this;
	inst.message = "Hello, world!";
	Object.defineProperty(Greeter.prototype, "greet", {
		value: function() {
			return inst.message;
		}
	});
}
