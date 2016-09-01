(function() {
    angular.module('App')
        .component('login', {
            templateUrl: 'js/Components/login/login.html',
            controller: loginController,
            controllerAs: 'vm'
        });
    
    function loginController(authenticationService, toastService) {
        
        var vm = this;
        vm.$onInit = onInit;
        vm.createEmailLogin = createEmailLogin;
        vm.login = login;
        vm.logout = logout;
        vm.showCreateEmailForm = showCreateEmailForm;
        vm.showEmailForm = showEmailForm;
        vm.close = close;

        //This closes TheCreateEmailForm
        function close () {
            vm.showTheCreateEmailForm = false;
        }

        //This allows the user to create an email Login
        function createEmailLogin(email, password1, password2) {
            if (password1 !== password2) {
                toastService.showToast('Passwords do not Match!');
            }
            else {
                authenticationService.createUserFromEmail(email, password1)
                    .then(function (response) {
                        toastService.showToast(response);
                        vm.showTheCreateEmailForm = false;
                    }, function (error) {
                        toastService.showToast(error.message);
                    });
            }
        }
        
        //This allows the user to login to the databse
        function login(provider, email, password) {
            if(vm.showTheEmailForm) {
                vm.showTheEmailForm = false;
            }

            authenticationService.login(provider, email, password)
                .then(function (response) {
                    if(response.displayName !== null) {
                        toastService.showToast(response.displayName + " Logged In!");
                    }
                    else {
                     toastService.showToast(response.email + " Logged In!")
                    }
                    vm.user = response;
                    },
                    function(error) {
                        console.log(error);
                        toastService.showToast(error.message)
                    })
        }
        
        //This allows the user to Logout
        function logout() {
            if (vm.user.displayName !== null) {
                toastService.showToast(vm.user.displayName + " Logged Out!");
            }
             else {
                toastService.showToast(vm.user.email + " Logged Out!")
            }

            vm.user = authenticationService.logout();
        }

        //This does the initial load to see if the user is logged in
        function onInit() {
                vm.user = authenticationService.initialCheck();

        }

        //This shows the form for the individual to create an email account
        function showCreateEmailForm() {
            vm.showTheEmailForm = false;
            vm.showTheCreateEmailForm = true;
        }

        //This shows the form for the individual to login to an email account
        function showEmailForm() {
            vm.showTheEmailForm = true;
            vm.showTheCreateEmailForm = false;
        }
        
    }
    
    
})();