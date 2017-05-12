(function () {
  'use strict';

  angular
    .module('app.main')
    .factory('UserService', UserService);

  /** @ngInject */
  function UserService(msApi, $http, $q) {
    function get() {
      var deferred = $q.defer();
      $http.get(msApi.getBaseUrl() + 'common/user/sessionUser').then(function (response) {
        deferred.resolve(response.data);
      });
      return deferred.promise;
    }

    function query(params) {
      return msApi.resolve('user@get', params);
    }

    function add(entry) {
      return msApi.resolve('user@save', {}, entry);
    }

    function update(entry) {
      return msApi.resolve('user@update', {}, entry);
    }

    function remove(uuid) {
      return msApi.resolve('user@remove', {}, {uuid: uuid});
    }

    return {
      query: query,
      get: get,
      add: add,
      update: update,
      remove: remove
    };

    // return {
    //     get: get
    // };
  }
})();
