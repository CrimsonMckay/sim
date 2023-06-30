import { createCombinedHandler } from "cds-routing-handlers";
import { Service } from "@sap/cds/apis/services";
import { CustomerHandler } from "../../src/handlers/customerService.handler";
import { SupplierHandler } from "../../src/handlers/supplierService.handler";
import { BCAllServiceMiddleware } from "../../src/middleware/BCAllService.middleware";

module.exports = (srv: Service) => {
  const combinedHandler = createCombinedHandler({
    handler: [CustomerHandler, SupplierHandler],
    middlewares: [BCAllServiceMiddleware],
  });

  combinedHandler(srv);
};
