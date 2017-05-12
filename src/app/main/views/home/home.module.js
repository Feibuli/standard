(function () {
  'use strict';

  angular
    .module('app.home', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, msApiProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.home', {
      url: '/home',
      views: {
        'content@app': {
          templateUrl: 'app/main/views/home/home.html',
          controller: 'HomeController as vm'
        }
      },
      resolve: {
        Home: function (msApi) {
          return msApi.resolve('home@get');
        }
      }
    });
    msNavigationServiceProvider.saveItem('specification', {
      title: 'specification',
      group: true,
      weight: 4
    });
    msApiProvider.register('home', ['app/data/base/home/home.json']);
    msNavigationServiceProvider.saveItem('specification.prepare', {
      title: '开发环境说明',
      state: 'app.home',
      icon: 'icon-barrel',
      weight: 1
    });
  }
})();
