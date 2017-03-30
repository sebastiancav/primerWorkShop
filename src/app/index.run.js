(function() {
  'use strict';

  angular
    .module('aplicacion')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
