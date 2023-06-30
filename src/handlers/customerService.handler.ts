import { Handler, OnRead, OnReject, Req, Srv } from "cds-routing-handlers";
import { Customer } from "../../srv/model/CustomerService";
import { Container, Service, Inject } from "typedi";
import { GreeterService } from "../../services/customer-serivce";
const cds = require("@sap/cds");
const logger = cds.log("CustomerHandler");

//This piece of code illustrates how dependency injection in conjuction with typedi can be used with cds-routing-handlers
// @Handler("CustomerService.Customer")
// @Service()
// export class CustomerHandler {
//   constructor(@Inject() public injectedService: GreeterService) {}
//   @OnRead()
//   public async read(
//     @Srv() srv: any,
//     @Req() req: any
//   ): Promise<Customer[] | any> {
//     logger.debug("Read Handler of customers");
//     const serviceInstance = Container.get(CustomerHandler);
//     console.log(serviceInstance.injectedService.greet("jude"));
//   }
// }
//--profile sandbox
// @Handler("CustomerService.Customer")
// export class CustomerHandler {
//   @OnRead()
//   public async read(
//     @Srv() srv: any,
//     @Req() req: any
//   ): Promise<Customer[] | any> {
//     const { Customer } = srv.entities;
//     const result1 = SELECT.from(Customer);

//     logger.debug("Read Handler of customers");
//     return result1;
//   }
// }

@Handler("CustomerService.Customer")
//@Service()
export class CustomerHandler {
  // constructor(@Inject() public injectedService: GreeterService) {}
  @OnRead()
  public async read(
    @Srv() srv: any,
    @Req() req: any
  ): Promise<Customer[] | any> {
    logger.debug("Read Handler of customers");
    const { Customer } = srv.entities;
    const result1 = SELECT.from(Customer);

    console.log("mfmm");
    return result1;
  }
}
