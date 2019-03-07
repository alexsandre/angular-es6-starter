import $ from "jquery";
import Greeter from "./greeter.class";

$(function() {
	var greeter = new Greeter(),
		message = greeter.greet();
	var h1 = $("<h1/>").text(message);
	h1.prependTo(document.body);
});
