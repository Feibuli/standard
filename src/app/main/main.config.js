(function () {
  'use strict';

  angular
    .module('app.main')
    .config(config);

  /** @ngInject */
  function config(msNavigationServiceProvider) {

    // Navigation
    msNavigationServiceProvider.saveItem('specification.base', {
      title: '内容规范',
      icon: 'icon-barley',
      weight: 1
    });
    msNavigationServiceProvider.saveItem('specification.dev', {
      title: '开发流程',
      icon: 'icon-clipboard-outline',
      weight: 1
    });
    // Service
  }
})();
