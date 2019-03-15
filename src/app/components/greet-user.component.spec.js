import angular from "angular";
import "angular-mocks";

import greetUserComponent from "./greet-user.component";

describe("greetUser", function() {
	beforeEach(function() {
		angular.module("angular-es6-starter", [])
			.component("greetUser", greetUserComponent);
		angular.mock.module("angular-es6-starter");
	});

	it("should exist and be typeof greetUserComponent", angular.mock.inject(function($componentController) {
		const $ctrl = $componentController("greetUser");
		expect($ctrl).toBeDefined();
		expect($ctrl).toEqual(jasmine.any(Object));
	}));

	describe("$ctrl", function() {
		it("set translation property on instantiation", angular.mock.inject(function($componentController) {
			const $ctrl = $componentController("greetUser");
			expect($ctrl.translation).toBeDefined();
			expect($ctrl.translation).toBe("Hello, world!");
		}));
	});
});
