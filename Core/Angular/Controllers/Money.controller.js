(function () {
    'use strict';

    angular.module("app").controller("MoneyController", MoneyController);

    MoneyController.$inject = [];

    function MoneyController() {
        var vm = this;

        //Properties
        vm.money = 12345;
        vm.platinumIn = 0;
        vm.goldIn = 0;
        vm.silverIn = 0;
        vm.copperIn = 0;


        //Public functions
        vm.addMoney = addMoney;
        vm.subtractMoney = subtractMoney;

        //Hook Functions
        vm.$onInit = function () {
            calculateMoney();
        }

        vm.$onChanges = function (changesObj) {
            
        }

        //Implementations
        function addMoney() {
            vm.money = vm.money + (vm.platinumIn * 1000) + (vm.goldIn + 100) + (vm.silverIn + 10) + vm.copperIn;
            calculateMoney();
        }

        function subtractMoney() {
            vm.money = vm.money - (vm.platinumIn * 1000) + (vm.goldIn + 100) + (vm.silverIn + 10) + vm.copperIn;
            calculateMoney();
        }

        //Private functions
        function calculateMoney() {
            var remainder = vm.money % 1000;
            vm.platinum = (vm.money - vm.money % 1000) / 1000;

            vm.gold = (remainder - remainder % 100) / 100;
            remainder = remainder % 100;

            vm.silver = (remainder - remainder % 10) / 10;
            vm.copper = remainder % 10;

        }

        //Event handlers
        
    }
})();