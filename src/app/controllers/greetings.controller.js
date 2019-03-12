import NgInject from "nginject-decorator";

@NgInject("$scope")
export default class GreetingsController {
	constructor($scope) {
		$scope.message = "Hello, world!";
	}
}
