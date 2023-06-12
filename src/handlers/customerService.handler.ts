import { Handler, OnRead, Req, Srv } from "cds-routing-handlers";
import { Customer } from "../../srv/model/CustomerService";

const logger = cds.log("CustomerHandler");

@Handler("CustomerService.Customer")
export class CustomerHandler {
  @OnRead()
  public async read(
    @Srv() srv: any,
    @Req() req: any
  ): Promise<Customer[] | any> {
    logger.debug("Read Handler of customers");
    console.log("hellcox");
  }
}
