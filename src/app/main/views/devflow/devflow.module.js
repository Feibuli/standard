(function () {
  'use strict';

  angular
    .module('app.devflow', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, msApiProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.devflow', {
      url: '/devflow',
      views: {
        'content@app': {
          templateUrl: 'app/main/views/devflow/devflow.html',
          controller: 'DevFlowController as vm'
        }
      },
      resolve: {
        DevFlow: function (msApi) {
          return msApi.resolve('devflow@get');
        }
      }
    });
    msApiProvider.register('devflow', ['app/data/base/devflow/devflow.json']);
    // Navigation
    msNavigationServiceProvider.saveItem('specification.dev.devflow', {
      title: '说明',
      state: 'app.devflow'
    });
  }
})();
