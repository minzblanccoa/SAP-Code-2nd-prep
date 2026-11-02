sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("testprep3.testprep3.controller.testprep3", {
        onInit() {
        },

        onClick() {

            var horizon = this.getView().byId("h1").getValue();
            var vertical = this.getView().byId("v1").getValue();

            var area = horizon*vertical;

            this.getView().byId("area").setValue(area);
        }
    });
});