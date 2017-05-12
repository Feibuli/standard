(function () {
  'use strict';

  angular
    .module('app.modulename', [])
    .config(config);

  /** @ngInject */
  function config($stateProvider, msApiProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.modulename', {
      url: '/modulename',
      views: {
        'content@app': {
          templateUrl: 'app/main/views/modulename/modulename.html',
          controller: 'ModulenameController as vm'
        }
      },
      resolve: {
        ModuleName: function (msApi) {
          return msApi.resolve('modulename@get');
        }
      }
    });
    msApiProvider.register('modulename', ['app/data/base/modulename/modulename.json']);
    // Navigation
    msNavigationServiceProvider.saveItem('specification.base.modulename', {
      title: '组件命名规范',
      state: 'app.modulename'
    });
  }
})();
