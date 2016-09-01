(function () {
    angular.module('App')
        .component('customInput', {
            bindings: {},
            templateUrl: 'js/Components/custom-input/custom-input.html',
            controller: customInputController,
            controllerAs: 'vm'
        });

    function customInputController(authenticationService, databaseService, toastService, inputService) {
        var vm = this;
        vm.$onInit = onInit;


        function onInit () {
            vm.user = authenticationService.initialCheck();
            vm.inputs = inputService.getInputs();
            vm.inputFunction = inputService.getFunction();
        }
        
    }

})();