(function () {
  'use strict';

  angular
    .module('app.denominate', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, msApiProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.denominate', {
      url: '/denominate',
      views: {
        'content@app': {
          templateUrl: 'app/main/views/denominate/denominate.html',
          controller: 'DenominateController as vm'
        }
      },
      resolve: {
        Denominate: function (msApi) {
          return msApi.resolve('denominate@get');
        }
      }
    });
    msApiProvider.register('denominate', ['app/data/base/denominate/denominate.json']);
    // Navigation
    msNavigationServiceProvider.saveItem('specification.base.denominate', {
      title: '文件命名规范',
      state: 'app.denominate'
    });
  }
})();
