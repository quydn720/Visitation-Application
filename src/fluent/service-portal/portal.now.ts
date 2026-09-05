import "@servicenow/sdk/global";
import { ServicePortal } from "@servicenow/sdk/core";
import { visitationTheme } from "../sp-theme/theme.now";
import { visitationMenu } from "../sp-instance-menu/menu.now";

// Visitation Portal - custom theme with custom header and role-based menu
export const visitationPortal = ServicePortal({
  $id: Now.ID["visitation_portal"],
  title: "Visitation Portal",
  urlSuffix: "visit",

  // Page routing
  homePage: "283b2c2892ef49b281a3580d3732aa53", // x_1085196_visita_0_home
  loginPage: "6995a144cb11120000f8d856634c9c25", // OOTB Login page
  notFoundPage: "3c2c9063cb11020000f8d856634c9c1f", // OOTB 404 page

  // Theme and menu
  theme: visitationTheme,
  mainMenu: visitationMenu,

  // Catalog integration
  catalogs: [
    {
      catalog: "e0d08b13c3330100c8b837659bba8fb4", // Service Catalog
      order: 100,
      active: true,
    },
  ],

  defaultPortal: false,
});
