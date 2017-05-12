(function () {
  'use strict';

  angular
    .module('app.api', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, msApiProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.api', {
      url: '/api',
      views: {
        'content@app': {
          templateUrl: 'app/main/views/api/api.html',
          controller: 'ApiController as vm'
        }
      },
      resolve: {
        ApiData: function (msApi) {
          return msApi.resolve('api@get');
        }
      }
    });
    msApiProvider.register('api', ['app/data/base/api/api.json']);
    // Navigation
    msNavigationServiceProvider.saveItem('specification.base.api', {
      title: 'api文档',
      state: 'app.api'
    });
  }
})();
