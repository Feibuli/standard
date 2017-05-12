(function () {
  'use strict';

  angular
    .module('app.core')
    .controller('MsThemeOptionsController', MsThemeOptionsController)
    .directive('msThemeOptions', msThemeOptions);

  /** @ngInject */
  function MsThemeOptionsController($cookies, fuseTheming) {
    var vm = this;
    // Data
    vm.themes = fuseTheming.themes;
    vm.layoutModes = [
      {
        label: '装箱模型',
        value: 'boxed'
      },
      {
        label: '大千世界',
        value: 'wide'
      }
    ];
    vm.layoutStyles = [
      {
        label: '尼亚雄',
        value: 'verticalNavigationFullwidthToolbar2',
        figure: '/assets/images/theme-options/vertical-nav-with-full-toolbar-2.jpg'
      },
      {
        label: '经典',
        value: 'verticalNavigation',
        figure: '/assets/images/theme-options/vertical-nav.jpg'
      },
      {
        label: '维克托',
        value: 'verticalNavigationFullwidthToolbar',
        figure: '/assets/images/theme-options/vertical-nav-with-full-toolbar.jpg'
      },
      {
        label: '哈兹塔',
        value: 'horizontalNavigation',
        figure: '/assets/images/theme-options/horizontal-nav.jpg'
      },
      {
        label: '精简',
        value: 'contentWithToolbar',
        figure: '/assets/images/theme-options/content-with-toolbar.jpg'
      },
      {
        label: '全屏',
        value: 'contentOnly',
        figure: '/assets/images/theme-options/content-only.jpg'
      }
    ];

    vm.layoutMode = 'wide';
    vm.layoutStyle = $cookies.get('layoutStyle') || 'verticalNavigationFullwidthToolbar2';

    // Methods
    vm.setActiveTheme = setActiveTheme;
    vm.getActiveTheme = getActiveTheme;
    vm.updateLayoutMode = updateLayoutMode;
    vm.updateLayoutStyle = updateLayoutStyle;

    //////////

    /**
     * Set active theme
     *
     * @param themeName
     */
    function setActiveTheme(themeName) {
      fuseTheming.setActiveTheme(themeName);
    }

    /**
     * Get active theme
     *
     * @returns {service.themes.active|{name, theme}}
     */
    function getActiveTheme() {
      return fuseTheming.themes.active;
    }

    /**
     * Update layout mode
     */
    function updateLayoutMode() {
      var bodyEl = angular.element('body');

      // Update class on body element
      bodyEl.toggleClass('boxed', (vm.layoutMode === 'boxed'));
    }

    /**
     * Update layout style
     */
    function updateLayoutStyle() {
      // Update the cookie
      $cookies.put('layoutStyle', vm.layoutStyle);

      // Reload the page to apply the changes
      location.reload();
    }
  }

  /** @ngInject */
  function msThemeOptions($mdSidenav) {
    return {
      restrict: 'E',
      scope: {},
      controller: 'MsThemeOptionsController as vm',
      templateUrl: 'app/core/theme-options/theme-options.html',
      compile: function (tElement) {
        tElement.addClass('ms-theme-options');

        return function postLink(scope) {
          /**
           * Toggle options sidenav
           */
          function toggleOptionsSidenav() {
            // Toggle the fuse theme options panel
            $mdSidenav('fuse-theme-options').toggle();
          }

          // Expose the toggle function
          scope.toggleOptionsSidenav = toggleOptionsSidenav;
        };
      }
    };
  }
})();
