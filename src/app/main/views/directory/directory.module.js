/**
 * Created by VPS on 2017/2/20.
 */
(function () {
  'use strict';
  angular
    .module('app.directory', [])
    .config(config);
  function config($stateProvider, msNavigationServiceProvider) {
    // State
    $stateProvider.state('app.directory', {
      url: '/directory',
      views: {
        'content@app': {
          templateUrl: 'app/main/views/directory/directory.html',
          controller: 'DirectoryController as vm'
        }
      }
    });
    // Navigation
    msNavigationServiceProvider.saveItem('specification.base.directory', {
      title: '目录结构规范',
      state: 'app.directory'
    });
  }
})();
