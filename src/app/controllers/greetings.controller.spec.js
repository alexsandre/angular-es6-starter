import angular from "angular";
import "angular-mocks";

import GreetingsController from "./greetings.controller";

describe("GreetingsController", function() {
	beforeEach(function() {
		angular.module("angular-es6-starter", [])
			.controller("GreetingsController", GreetingsController);
		angular.mock.module("angular-es6-starter");
	});

	it("should exist and be instanceof GreetingsController", angular.mock.inject(function($controller, $rootScope) {
		let $scope = $rootScope.$new();
		let controller = $controller("GreetingsController", {$scope});

		expect(controller).toBeDefined();
		expect(controller).toEqual(jasmine.any(GreetingsController));
	}));

	describe("$scope.message", function() {
		it("set to 'Hello, world!' upon instantiation", angular.mock.inject(function($controller, $rootScope) {
			let $scope = $rootScope.$new();
			$controller("GreetingsController", {$scope});

			expect($scope.message).toBe("Hello, world!");
		}));
	});
});
