(function () {
  'use strict';

  angular
    .module('app.directivedemo')
    .controller('DirectiveDemoController', DirectiveDemoController)
    .directive('demo1', demo1)
    .directive('demo2', demo2)
    .directive('demo3', demo3)

  /** @ngInject */
  function DirectiveDemoController($scope) {
    angular.element('pre code').each(function (i, block) {
      hljs.highlightBlock(block);
    });
  }

  function demo1() {
    return {
      restrict: 'EA',
      controller: function ($scope) {
        var vm = '111';
        console.log(this);
        console.log($scope);
        $scope.add1 = '1'
      },
      controllerAs:'vm'
    };
  }

  function demo2() {
    return {
      restrict: 'EA',
      controller: function ($scope) {
        $scope.add2 = '2';
        console.log('a',$scope.add1);
      },
      link:function(scope,element,attrs){

      }
    };
  }

  function demo3() {
    return {
      restrict: 'EA',
      controller: function ($scope) {
        $scope.add()
        {
          console.log('1111');
        }
      }
    };
  }
})();
