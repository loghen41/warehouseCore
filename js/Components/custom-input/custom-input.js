(function () {
    angular.module('App')
        .component('customInput', {
            bindings: {},
            templateUrl: 'js/Components/custom-input/custom-input.html',
            controller: customInputController,
            controllerAs: 'vm'
        });

    function customInputController(authenticationService,databaseService, toastService) {
        var vm = this;
        $onInit = onInit;

        function onInit () {
            vm.user = authenticationService.initialCheck();
        }
        
    }

})();