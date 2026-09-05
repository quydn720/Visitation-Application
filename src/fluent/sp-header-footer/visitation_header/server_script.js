(function () {
  data.connect_support_queue_id = $sp.getValue("sp_chat_queue");
  data.login_page = $sp.getValue("login_page");
  data.profileBtnMsg = gs.getMessage("User options");
  data.toggleMsg = gs.getMessage("Toggle navigation");
  var menu = $sp.getValue("sp_rectangle_menu");
  data.menu = $sp.getWidgetFromInstance(menu);
  var pluginManager = new GlidePluginManager();
  data.langSelector = pluginManager.isActive("com.glide.i18n") ? $sp.getWidget("sp-lang-selector") : "";
  if (data.menu && data.menu.data) {
    data.menu.data.replace = true;
    data.hasLogin = false;
    if (data.menu.data.menu.items) {
      data.hasMenuItems = data.menu.data.menu.items.length > 0;
      for (var i in data.menu.data.menu.items) {
        var item = data.menu.data.menu.items[i];
        if (item.type == "page" && item.sp_page == data.login_page)
          data.hasLogin = true;
      }
    }
  }
  data.loginWidget = $sp.getWidgetFromInstance("login-modal");
})();
