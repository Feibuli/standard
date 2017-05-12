/**
 * Created by VPS on 2017/2/20.
 */
(function () {
  'use strict';
  angular
    .module('app.addicon', [])
    .config(config);
  function config($stateProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.addicon', {
      url: '/addicon',
      views: {
        'content@app': {
          templateUrl: 'app/main/views/addicon/addicon.html',
          controller: 'AddIconController as vm'
        }
      }
    });
    // Navigation
    msNavigationServiceProvider.saveItem('specification.base.addicon', {
      title: '添加新Icon Font示例',
      state: 'app.addicon'
    });
  }
})();
