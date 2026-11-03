/*global QUnit*/

sap.ui.define([
	"test1/test1/controller/Test1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Test1 Controller");

	QUnit.test("I should test the Test1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
