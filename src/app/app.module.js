import $ from "jquery";
import Greeter from "./greeter/greeter.class";

$(function() {
	let greeter = new Greeter(),
		message = greeter.greet();
	let h1 = $("<h1/>").text(message);
	h1.prependTo(document.body);
});
