(function () {
  'use strict';

  angular
    .module('app.devstep', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, msApiProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.devstep', {
      url: '/devstep',
      views: {
        'content@app': {
          templateUrl: 'app/main/views/devstep/devstep.html',
          controller: 'DevStepController as vm'
        }
      },
      resolve: {}
    });
    // Navigation
    msNavigationServiceProvider.saveItem('specification.dev.devstep', {
      title: '基本步骤',
      state: 'app.devstep'
    });
  }
})();
