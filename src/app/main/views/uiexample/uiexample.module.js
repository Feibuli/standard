/**
 * Created by VPS on 2017/2/20.
 */
(function () {
  'use strict';
  angular
    .module('app.uiexample', [])
    .config(config);
  function config($stateProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.uiexample', {
      url: '/uiexample',
      views: {
        'content@app': {
          templateUrl: 'app/main/views/uiexample/uiexample.html',
          controller: 'UiExampleController as vm'
        }
      }
    });
    // Navigation
    msNavigationServiceProvider.saveItem('specification.base.uiexample', {
      title: 'UI套件示例以及API参考文档',
      state: 'app.uiexample'
    });
  }
})();
