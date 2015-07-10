sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "sap/ui/demo/wt/controller/HelloDialog"
], function (UIComponent, JSONModel, HelloDialog) {
  "use strict";

  return UIComponent.extend("sap.ui.demo.wt.Component", {
    metadata : {
      manifest : "json"
    },

    init : function() {
      // call init of parent
      UIComponent.prototype.init.apply(this, arguments);

      // Set the data model
      var oData = {
        recipient : {
          name : "World"
        }
      };

      var oModel = new JSONModel(oData);
      this.setModel(oModel);

      // Set our local Invoice model
      var oConfig = this.getMetadata().getConfig();
      var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;

      var oInvoiceModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.invoiceLocal));
      this.setModel(oInvoiceModel, "invoice");

      // Set the dialog fragment
      this.helloDialog = new HelloDialog();
    }
  })
})
