import angular from "angular";

import GreetingsController from "./controllers/greetings.controller";

angular.module("angular-es6-starter", [])
	.controller("GreetingsController", GreetingsController);
