/**
 * Created by VPS on 2017/2/20.
 */
(function () {
  'use strict';
  angular
    .module('app.usebower', [])
    .config(config);
  function config($stateProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.usebower', {
      url: '/usebower',
      views: {
        'content@app': {
          templateUrl: 'app/main/views/usebower/usebower.html',
          controller: 'UseBowerController as vm'
        }
      }
    });
    // Navigation
    msNavigationServiceProvider.saveItem('specification.base.usebower', {
      title: 'Bower使用介绍',
      state: 'app.usebower'
    });
  }
})();
