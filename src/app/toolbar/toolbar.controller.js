(function () {
  'use strict';

  angular
    .module('app.toolbar')
    .controller('ToolbarController', ToolbarController);

  /** @ngInject */
  function ToolbarController($rootScope, $q, $state, $timeout, $mdSidenav, $translate, $mdToast, msNavigationService) {
    var vm = this;

    // Data
    $rootScope.global = {
      search: ''
    };

    vm.bodyEl = angular.element('body');
    // Methods
    vm.toggleSidenav = toggleSidenav;
    vm.toggleHorizontalMobileMenu = toggleHorizontalMobileMenu;
    vm.toggleMsNavigationFolded = toggleMsNavigationFolded;
    vm.search = search;
    vm.searchResultClick = searchResultClick;

    //////////
    /**
     * Toggle sidenav
     *
     * @param sidenavId
     */
    function toggleSidenav(sidenavId) {
      $mdSidenav(sidenavId).toggle();
    }

    /**
     * Toggle horizontal mobile menu
     */
    function toggleHorizontalMobileMenu() {
      vm.bodyEl.toggleClass('ms-navigation-horizontal-mobile-menu-active');
    }

    /**
     * Toggle msNavigation folded
     */
    function toggleMsNavigationFolded() {
      msNavigationService.toggleFolded();
    }

    /**
     * Search action
     *
     * @param query
     * @returns {Promise}
     */
    function search(query) {
      var navigation = [],
        flatNavigation = msNavigationService.getFlatNavigation(),
        deferred = $q.defer();

      // Iterate through the navigation array and
      // make sure it doesn't have any groups or
      // none ui-sref items
      for (var x = 0; x < flatNavigation.length; x++) {
        if (flatNavigation[x].uisref) {
          navigation.push(flatNavigation[x]);
        }
      }

      // If there is a query, filter the navigation;
      // otherwise we will return the entire navigation
      // list. Not exactly a good thing to do but it's
      // for demo purposes.
      if (query) {
        navigation = navigation.filter(function (item) {
          if (angular.lowercase(item.title).search(angular.lowercase(query)) > -1) {
            return true;
          }
        });
      }

      // Fake service delay
      $timeout(function () {
        deferred.resolve(navigation);
      }, 1000);

      return deferred.promise;
    }

    /**
     * Search result click action
     *
     * @param item
     */
    function searchResultClick(item) {
      // If item has a link
      if (item.uisref) {
        // If there are state params,
        // use them...
        if (item.stateParams) {
          $state.go(item.state, item.stateParams);
        }
        else {
          $state.go(item.state);
        }
      }
    }


  }

})();
