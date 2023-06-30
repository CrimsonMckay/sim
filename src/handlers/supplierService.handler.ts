import { Handler, OnRead, OnReject, Req, Srv, Use } from "cds-routing-handlers";
import { Suppliers } from "../../srv/model/CustomerService";
import { BCAllServiceMiddleware } from "../middleware/BCAllService.middleware";
const logger = cds.log("SupplierHandler");

@Handler("CustomerService.Suppliers")
//@Service()
@Use(BCAllServiceMiddleware)
export class SupplierHandler {
  // constructor(@Inject() public injectedService: GreeterService) {}
  @OnRead()
  public async read(
    @Srv() srv: any,
    @Req() req: any
  ): Promise<Suppliers[] | any> {
    logger.debug("Read Handler of customers");
    //  const bupa = await cds.connect.to("API_BUSINESS_PARTNER");

    return req.middlewareResult;
  }
}
