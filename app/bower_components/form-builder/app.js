angular.module('formBuilder', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'formBuilder.formInput', 'formBuilder.password']);

angular.module('formBuilder').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
