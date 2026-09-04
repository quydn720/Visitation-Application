import "@servicenow/sdk/global";
import { SPMenu } from "@servicenow/sdk/core";

// Visitation Menu — role-based navigation with admin/receptionist management section
export const visitationMenu = SPMenu({
  $id: Now.ID["visitation_menu"],
  title: "Visitation Menu",
  widget: "5ef595c1cb12020000f8d856634c9c6e", // OOTB Header Menu widget
  items: [
    // HOME - visible to all users
    {
      $id: Now.ID["menu_home"],
      type: "page",
      label: "Home",
      page: "283b2c2892ef49b281a3580d3732aa53",
      glyph: "home",
      order: 100,
    },
    // SUBMIT VISIT - visible to all users (Record Producer)
    {
      $id: Now.ID["menu_submit_visit"],
      type: "sc_cat_item",
      label: "Submit Visit",
      catItem: "3f7f63ca07964da089b059c772410233",
      page: "9f12251147132100ba13a5554ee490f4",
      glyph: "plus",
      order: 200,
    },
    // MY VISITS - visible to all users (their own visits)
    {
      $id: Now.ID["menu_my_visits"],
      type: "page",
      label: "My Visits",
      page: "34f90f969fd84e0b85fc958ccea9a9ca",
      glyph: "list-alt",
      order: 300,
    },
    // MY APPROVALS - visible to all users
    {
      $id: Now.ID["menu_my_approvals"],
      type: "page",
      label: "My Approvals",
      page: "d3485112cb13310000f8d856634c9c3e",
      glyph: "ok-circle",
      order: 400,
    },
    // VISIT MANAGEMENT - agents only (receptionist + admin)
    {
      $id: Now.ID["menu_visit_mgmt"],
      type: "page",
      label: "Visit Management",
      page: "3d7e859cd86546f7bb56e94b6a61af16",
      glyph: "briefcase",
      order: 500,
      roles: ["x_1085196_visita_0.admin", "x_1085196_visita_0.receptionist"],
      childItems: [
        {
          $id: Now.ID["menu_all_visits"],
          type: "page",
          label: "All Visits",
          page: "3d7e859cd86546f7bb56e94b6a61af16",
          glyph: "list",
          order: 100,
        },
        {
          $id: Now.ID["menu_future_visits"],
          type: "page",
          label: "Future Visits",
          page: "fac70662a71f4d5ea9063b580fd04857",
          glyph: "forward",
          order: 200,
        },
      ],
    },
  ],
});
