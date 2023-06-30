import cds from "@sap/cds";
import { Service } from "@sap/cds/apis/services";

const logger = cds.log("server");

let BCAllService: Service = null;

export async function getBCAllService(): Promise<Service> {
  if (!BCAllService) {
    BCAllService = await cds.connect.to("API_BUSINESS_PARTNER");
  }
  return BCAllService;
}
