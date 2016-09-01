/**
 * Created by loganhendricks on 8/25/16.
 */
(function () {
    angular.module('App')
        .service('authenticationService', function ($sessionStorage, $localStorage, $firebaseObject, $firebaseAuth, $q) {

            var vm = this;
            vm.createUser = createUser;
            vm.login = login;
            vm.logout = logout;
            vm.initialCheck = initialCheck;
            var user;

            //This is the function to create a user
            function createUser(Id) {
                var promise = $q.defer();
                if (employeeId) {
                    promise.resolve(employeeId + " Created");
                }
                else {
                    promise.reject(creationError);
                }
                return promise.promise;

            }

            //This does the initial Check for the user
            function initialCheck() {
                if(user) {
                    return user;
                }
                else if ($sessionStorage.user) {
                    user = $sessionStorage.user;
                    return user;
                }
                else {
                    return false;
                }

            }

            //This is how the user credentials are authenticated
            function login(employeeId, password) {

                var promise = $q.defer();
                
                if (employeeId && password) {
                          promise.resolve(employeeId + "Logged In!");
                } else {
                    promise.reject('No Employee Id Specified');
                }
                return promise.promise;
            }

            //This is how the user logs out of the database
            function logout() {
                user = undefined;
                return user;
            }


        });
})();