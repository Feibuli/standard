(function () {
  'use strict';

  angular
    .module('app.main')
    .run(runBlock);

  /** @ngInject */
  function runBlock() {
    console.log('app.main is running.');
  }
})();
