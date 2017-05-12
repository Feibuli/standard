(function () {
  'use strict';

  angular
    .module('app.demo')
    .controller('DemoController', DemoController);

  /** @ngInject */
  function DemoController() {
    angular.element('pre code').each(function (i, block) {
      hljs.highlightBlock(block);
    });
  }
})();
