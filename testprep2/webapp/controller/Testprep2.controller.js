sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"

], (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("testprep2.testprep2.controller.Testprep2", {
        onInit() {

            var oModel1 = new JSONModel("/json/player.json");
            var oModel2 = new JSONModel("/json/point.json");

            this.getView().setModel(oModel1);
            this.getView().setModel(oModel2, "attack");

            console.log(oModel1, oModel2);

        }
    });
});