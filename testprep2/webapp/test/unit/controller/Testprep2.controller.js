/*global QUnit*/

sap.ui.define([
	"testprep2/testprep2/controller/Testprep2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Testprep2 Controller");

	QUnit.test("I should test the Testprep2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
