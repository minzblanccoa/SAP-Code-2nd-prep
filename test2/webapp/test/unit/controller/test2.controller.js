/*global QUnit*/

sap.ui.define([
	"test2/test2/controller/test2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("test2 Controller");

	QUnit.test("I should test the test2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
