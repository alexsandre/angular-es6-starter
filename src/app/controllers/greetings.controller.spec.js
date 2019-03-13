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

	describe("$scope", function() {
		it("set title property on instantiation", angular.mock.inject(function($controller, $rootScope) {
			let $scope = $rootScope.$new();
			$controller("GreetingsController", {$scope});

			expect($scope.title).toBe("angular-es6-starter");
		}));

		it("set message property on instantiation", angular.mock.inject(function($controller, $rootScope) {
			let $scope = $rootScope.$new();
			$controller("GreetingsController", {$scope});

			expect($scope.message).toBe("Toolchain for developing Angular applications with ES6");
		}));

		it("set technologies property on instantiation", angular.mock.inject(function($controller, $rootScope) {
			let $scope = $rootScope.$new();
			$controller("GreetingsController", {$scope});

			expect($scope.technologies).toEqual(jasmine.any(Array));
			expect($scope.technologies).toContain("Angular");
			expect($scope.technologies).toContain("Bootstrap");
			expect($scope.technologies).toContain("Webpack");
		}));
	});
});
