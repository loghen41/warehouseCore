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

        vm.inputs = [
            {
                name: "email",
                input: "emailInput",
                model: vm.email,
                type: "email"
            },
            {
                name: "employeeId",
                input: "employeeIdInput",
                model: vm.employeeId,
                type: "text"
            }
        ];

        function onInit () {
            vm.user = authenticationService.initialCheck();
           // vm.inputs = inputService.getInputs();

        }
        
    }

})();