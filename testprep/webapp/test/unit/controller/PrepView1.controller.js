/*global QUnit*/

sap.ui.define([
	"testprep/testprep/controller/PrepView1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PrepView1 Controller");

	QUnit.test("I should test the PrepView1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
