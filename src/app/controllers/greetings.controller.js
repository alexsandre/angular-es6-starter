import NgInject from "nginject-decorator";

@NgInject("$scope")
export default class GreetingsController {
	constructor($scope) {
		$scope.title = "angular-es6-starter";
		$scope.message = "Toolchain for developing Angular applications with ES6";
		$scope.technologies = [
			"Angular",
			"Bootstrap",
			"CSS3",
			"ES6",
			"HTML5",
			"Istanbul",
			"Jasmine",
			"Karma",
			"Webpack"
		];
	}
}
