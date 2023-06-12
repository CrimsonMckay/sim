import { createCombinedHandler } from "cds-routing-handlers";
import { Service } from "@sap/cds/apis/services";
import { CustomerHandler } from "../../src/handlers/customerService.handler";

module.exports = (srv: Service) => {
  const combinedHandler = createCombinedHandler({
    handler: [CustomerHandler],
    middlewares: [],
  });

  combinedHandler(srv);
};
