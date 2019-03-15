import "./styles.css";

import angular from "angular";

import greetUserComponent from "./app/components/greet-user.component";
import GreetingsController from "./app/controllers/greetings.controller";

angular.module("angular-es6-starter", [])
	.component("greetUser", greetUserComponent)
	.controller("GreetingsController", GreetingsController);
