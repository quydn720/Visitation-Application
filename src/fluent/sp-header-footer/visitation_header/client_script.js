api.controller = function($rootScope, $scope, spUtil, $location, $uibModal, cabrillo, $timeout, $window, i18n) {
  $scope.logoText = i18n.format(i18n.getMessage("Go to {0} Homepage"), $scope.portal.title);
  $scope.collapse = function() {
    $rootScope.$emit("sp-navbar-collapse");
  };

  $scope.avatarProfile = {
    userID: $scope.user.sys_id,
    name: $scope.user.name,
    initials: $window.NOW.user_initials
  };

  if ($window.NOW.user_avatar) {
    $scope.avatarProfile.userImage = $window.NOW.user_avatar;
  }

  if (cabrillo.isNative()) {
    if ($window.innerWidth < 767) {
      $scope.isViewNative = true;
    } else {
      $scope.isViewNativeTablet = true;
    }
  }

  $scope.openLogin = function() {
    $scope.modalInstance = $uibModal.open({
      templateUrl: "modalLogin",
      scope: $scope
    });

    var pageRoot = angular.element(".sp-page-root");
    $scope.modalInstance.rendered.then(function() {
      var $uibModalStack = $injector.get("$uibModalStack");
      var modalObj = $uibModalStack.getTop();
      var modal = modalObj.value.modalDomEl;

      modal.attr("aria-label", modal.find(".panel-title").html());
      modal.attr("aria-modal", "true");
      pageRoot.attr("aria-hidden", "true");
    });

    $scope.modalInstance.closed.then(function() {
      pageRoot.attr("aria-hidden", "false");
    });
  };

  var mdScreenSize = isMDScreenSize();
  $scope.showSMAvatar = isMDScreenSize();
  $scope.showAvatar = !isMDScreenSize();

  $scope.isAgentChatConfigured = g_has_agent_chat_config;

  var nav = document.getElementById("responsiveNav");

  function isMDScreenSize() {
    if (nav) return nav.classList.contains("responsive-tablet");
    else return false;
  }

  function updateResponsiveClasses(width) {
    if (width <= 992) {
      nav.classList.add("responsive-tablet");
      nav.classList.remove("responsive-desktop");
    } else {
      nav.classList.add("responsive-desktop");
      nav.classList.remove("responsive-tablet");
    }
    if (mdScreenSize !== isMDScreenSize() && (!$scope.showSMAvatar || !$scope.showAvatar)) {
      $scope.showSMAvatar = true;
      $scope.showAvatar = true;
    }
  }

  var observer = new ResizeObserver(function(entries) {
    if (entries && entries[0]) {
      updateResponsiveClasses(entries[0].contentRect.width);
    }
  });
  observer.observe(nav);

  $rootScope.$on("sp.avatar_changed", function(evt, obj) {
    $scope.userID = "";
    $scope.newAvatarId = obj.newAvatarId;
    $timeout(function() {
      $scope.userID = $scope.user.sys_id;
      $("#profile-dropdown .sub-avatar").css(
        "background-image",
        'url("' + $scope.newAvatarId + '.iix?t=small")'
      );
    });
  });

  $scope.isHomepage = function() {
    if (!$scope.page.id) return true;
    if ($scope.page.id == $scope.portal.homepage_dv) return true;
    return false;
  };
};
