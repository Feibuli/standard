(function () {
  'use strict';

  angular
    .module('app.demo', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, msApiProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.demo', {
      url: '/demo',
      views: {
        'content@app': {
          templateUrl: 'app/main/views/demo/demo.html',
          controller: 'DemoController as vm'
        }
      },
      resolve: {
        Demo: function (msApi) {
          return msApi.resolve('demo@get');
        }
      }
    });
    msApiProvider.register('demo', ['app/data/base/demo/demo.json']);
    // Navigation
    msNavigationServiceProvider.saveItem('specification.dev.demo', {
      title: '演示示例',
      state: 'app.demo'
    });
  }
})();
