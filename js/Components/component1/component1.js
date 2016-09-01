(function () {
    angular.module('App')
        .component('component1', {
            bindings: {},
            templateUrl: 'js/Components/component1/component1.html',
            controller: component1Controller,
            controllerAs: 'vm'
        });

    function component1Controller(authenticationService,databaseService, toastService) {
        var vm = this;
        $onInit = onInit;

        function onInit () {
            vm.user = authenticationService.initialCheck();
        }
        
    }

})();