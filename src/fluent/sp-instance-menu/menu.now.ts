import "@servicenow/sdk/global";
import { SPMenu } from "@servicenow/sdk/core";

// Visitation Menu — recreated with "Submit Visit" pointing to the Record Producer
export const visitationMenu = SPMenu({
  $id: Now.ID["visitation_menu"],
  title: "Visitation Menu",
  widget: "5ef595c1cb12020000f8d856634c9c6e", // OOTB Header Menu widget
  items: [
    {
      $id: Now.ID["menu_home"],
      type: "page",
      label: "Home",
      page: "283b2c2892ef49b281a3580d3732aa53", // x_1085196_visita_0_home
      glyph: "home",
      order: 100,
    },
    {
      $id: Now.ID["menu_requests"],
      type: "page",
      label: "Requests",
      page: "34f90f969fd84e0b85fc958ccea9a9ca", // x_1085196_visita_0_my_visits
      glyph: "inbox",
      order: 200,
      childItems: [
        {
          $id: Now.ID["menu_my_visit_requests"],
          type: "page",
          label: "My Visit Requests",
          page: "34f90f969fd84e0b85fc958ccea9a9ca", // x_1085196_visita_0_my_visits
          glyph: "list-alt",
          order: 100,
        },
      ],
    },
    {
      // UPDATED: Changed from type "page" to "sc_cat_item" to open the Record Producer
      $id: Now.ID["menu_submit_visit"],
      type: "sc_cat_item",
      label: "Submit Visit",
      catItem: "3f7f63ca07964da089b059c772410233", // Record Producer: Submit a Visit Request
      page: "9f12251147132100ba13a5554ee490f4", // OOTB sc_cat_item page
      glyph: "plus",
      order: 300,
    },
    {
      $id: Now.ID["menu_future_visits"],
      type: "page",
      label: "Future Visits",
      page: "fac70662a71f4d5ea9063b580fd04857", // x_1085196_visita_0_future_visits
      glyph: "forward",
      order: 400,
    },
    {
      $id: Now.ID["menu_all_visits"],
      type: "page",
      label: "All Visits",
      page: "3d7e859cd86546f7bb56e94b6a61af16", // x_1085196_visita_0_visits
      glyph: "list",
      order: 500,
    },
  ],
});
