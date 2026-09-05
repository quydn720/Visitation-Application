import "@servicenow/sdk/global";
import { SPHeaderFooter } from "@servicenow/sdk/core";

export const visitationHeader = SPHeaderFooter({
  $id: Now.ID["visitation_header"],
  id: "x_1085196_visita_0_header",
  name: "Visitation Portal Header",
  static: true,
  htmlTemplate: Now.include("./template.html"),
  clientScript: Now.include("./client_script.js"),
  serverScript: Now.include("./server_script.js"),
  linkScript: Now.include("./link.js"),
  customCss: Now.include("./styles.scss"),
});
