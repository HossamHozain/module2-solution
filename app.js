(function () {
    'use strict';

    angular
        .module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    // first controller
    ToBuyController.$inject = ["ShoppingListCheckOffService"]
    function ToBuyController(ShoppingListCheckOffService) {
        let buy = this;
        buy.items = ShoppingListCheckOffService.getbuyItems();
        buy.removeItem =
            function ($index) { ShoppingListCheckOffService.removeItem($index); };
        buy.emptyMessage = function(){return ShoppingListCheckOffService.buyMessage();} ;
    }
    // second controller
    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"]
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        let bought = this;
        bought.items = ShoppingListCheckOffService.getboughtItems();
        bought.emptyMessage = function (){return ShoppingListCheckOffService.boughtMessage();}

    }
    // service function
    function ShoppingListCheckOffService() {
        let 
            service = this,
            buyItems = [
                { quantity: "2 kg", name: "milk" },
                { quantity: "1kg", name: "nescafe" },
                { quantity: "20 bars", name: "chocolate" },
                { quantity: "1 kg", name: "coffee" },
                { quantity: "10 kg", name: "cookies" }],
            boughItems = [];

        service.getbuyItems = function () { return buyItems; }

        service.getboughtItems = function () { return boughItems; }

        service.removeItem = function (index) {
            let removeditem = buyItems[index];
            buyItems.splice(index, 1);
            boughItems.push(removeditem);
        }

        service.buyMessage=function(){if(buyItems.length>0){return false;} else {return true;}}
        service.boughtMessage = function () {if(boughItems==0){return true;}else {return false;}}
    }

}());
