function(scope, element) {
	var prevFocusIndex = -1;
	var KEY = {
		TAB : 9,
		ENTER : 13,
		ESC : 27,
		SPACE_BAR : 32,
		LEFT : 37,
		UP : 38,
		RIGHT : 39,
		DOWN : 40
	};

	function isMDScreenSize() {
		return window.matchMedia('(max-width: 992px)').matches;
	}

	var navbarContainer = $('#sp-nav-bar');
	navbarContainer.on('shown.bs.collapse', function () {
		$('a:visible', navbarContainer).first().focus();
	});

	$(document).keyup(function(event) {
		var mdScreenSize = isMDScreenSize();
		if (event.which == KEY.TAB || event.which == KEY.LEFT || event.which == KEY.RIGHT) {
			if (!mdScreenSize && $(event.target).parents(".dropdown-menu").length == 0) {
				$(".dropdown.open", $(element)).removeClass("open");
				$("[data-toggle='dropdown']", $(element)).attr("aria-expanded", "false");
				prevFocusIndex = -1;
			}
		} else if(event.which == KEY.UP || event.which == KEY.DOWN) {
			var parent = $(event.target).parents('.dropdown-menu');

			if (parent.hasClass('custom-drop-down')) return;

			if (parent.length) {
				var items = $(parent).find('li a, li button');
				if (!items.length)
					return;

				var index = items.index(items.filter(':focus'));
				if(index == -1) return;

				if (prevFocusIndex == index) {
					if (index == 0)
						index = items.length - 1;
					else if (index == items.length - 1)
						index = 0;

					items[index].focus();
				} else if (event.which == KEY.UP && index == 0 && prevFocusIndex == -1) {
					index = items.length - 1;
					items[index].focus();
				}
				prevFocusIndex = index;

			} else {
				if ($(event.target).is('[data-toggle="dropdown"]')) {
					var parent = $(event.target).parent().find('.dropdown-menu');

					if (parent.hasClass('custom-drop-down')) return;

					var items = $(parent).find('li a, li button');
					if (!items.length) return;

					var index = -1;
					if(event.which == KEY.DOWN)
						index = 0;
					else if(event.which == KEY.UP)
						index = items.length > 0 ? items.length-1 : 0;

					items[index].focus();
					prevFocusIndex = index;

				}
			}
		}
		if(event.which == KEY.ESC) {
			prevFocusIndex = -1;
			if (mdScreenSize && $('#sp-nav-bar').attr("aria-expanded")) {
				closeMobileMenu();

				if ($(event.target).parents("#sp-nav-bar").length > 0)
					$('.navbar-toggle').focus();
			}
		}

		if (event.which == KEY.ENTER || event.which == KEY.SPACE_BAR)
			$(event.target).parent(".dropdown.open").find("ul.dropdown-menu li:first-child a").focus();
	});

	$(element).on('click.nav','.navbar-collapse.in',function(e) {
		var target = $(e.target);
		if (target.is('a')) {
			if (target.hasClass('sp-menu-has-items'))
				return;

			$(this).removeClass('in').addClass('collapse');
			return;
		}

		if (target.parent().hasClass("toggle-dropdown")) {
			$(this).removeClass('in').addClass('collapse');
			return;
		}

		if (!target.parent().is('a'))
			return;

		if (target.parents("ul.dropdown-menu").length > 0)
			$(this).removeClass('in').addClass('collapse');
	});

	$(document).on('click', function(e) {
		var target = $(e.target);
		if (target.parents('#sp-nav-bar').length == 0) {
			closeMobileMenu();
		}
	});

	$('#sp-nav-bar').on('keydown', 'a', function(event) {
		if (($(this).is($('#sp-nav-bar a').last()) && event.which == KEY.TAB && !event.shiftKey) || ($(this).is($('#sp-nav-bar a').first()) && event.which == KEY.TAB && event.shiftKey)) {
			closeMobileMenu();
			setTimeout(function () {
				window.scrollBy(0,-200);
			});
		}
	});

	function closeMobileMenu() {
		$('#sp-nav-bar').collapse('hide');
	}
}
