(function () {
  'use strict';

  angular
    .module('app.directivedemo', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, msApiProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.directivedemo', {
      url: '/directivedemo',
      views: {
        'content@app': {
          templateUrl: 'app/main/views/directivedemo/directivedemo.html',
          controller: 'DirectiveDemoController'
        }
      },
      resolve: {
        DirectiveDemo: function (msApi) {
          return msApi.resolve('directivedemo@get');
        }
      }
    });
    msApiProvider.register('directivedemo', []);
    //Navigation
    msNavigationServiceProvider.saveItem('specification.base.directivedemo', {
      title: '指令详解',
      state: 'app.directivedemo'
    });
  }
})();
