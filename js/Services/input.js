(function() {
    angular.module('App')
        .service('inputService', function() {
             
            var vm = this;
            var inputs = [

                {
                    label: "Name",
                    inputName: "nameInput",
                    model: vm.name,
                    type: "text"
                },
                {
                    label: "Email",
                    inputName: "emailInput",
                    model: vm.email,
                    type: "email"
                },
                {
                    label: "Employee Id",
                    inputName: "employeeIdInput",
                    model: vm.employeeId,
                    type: "number"
                }
            ];

           var theFunction = function () {
                console.log('test');
            };

            vm.getFunction = getFunction;
            vm.setFunction = setFunction;
            vm.getInputs = getInputs;
            vm.setInputs = setInputs;


            //This function allows the user to Get the Functions
            function getFunction () {
                return theFunction;
            }

            //This function allows the user to Set the Functions
            function setFunction (newFunction) {
                theFunction = newFunction;
            }

            //This functions allows the user to Get the Different Inputs to Display
            function getInputs () {
               return inputs;
            }

            //This function allows the user to Set the Different Inputs to Display
            function setInputs (newInputs) {
                inputs = newInputs;
            }
            
        })
})();