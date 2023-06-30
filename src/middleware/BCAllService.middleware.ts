import { ICdsMiddleware, Middleware, Req } from "cds-routing-handlers";
import { Service } from "@sap/cds/apis/services";
import { getBCAllService } from "../util/BCallService";
import { isNetworkErrorGuard } from "../util/TypeGuards";

let BCAllService: Service = null;
const logger = cds.log("UsersHandler");

@Middleware({
  global: false,
})
export class BCAllServiceMiddleware implements ICdsMiddleware {
  public async use(@Req() req: any): Promise<any> {
    logger.debug("BCAll Middleware used");

    BCAllService = await getBCAllService();

    const aExceptions = ["Customer"];
    if (
      aExceptions.some((sPath) => {
        return req.path
          ? req.path.indexOf(sPath) !== -1
          : req?.event.indexOf(sPath) !== -1;
      })
    ) {
      return req;
    }
    // if(req.path.indexOf("CurrentEmployment") !== -1 || req.path.indexOf("DirectReport") !== -1) {
    //     return req;
    // }
    try {
      // Handover to the SF OData Service to fecth the requested data
      const tx = BCAllService.tx(req);
      const result = await tx.run(req.query);
      req.middlewareResult = result;
      return req;
    } catch (err) {
      if (isNetworkErrorGuard(err)) {
        req.error(err.code, err.message);
      }
    }
  }
}
