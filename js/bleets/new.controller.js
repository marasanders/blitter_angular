"use strict";

(function(){
  angular
  .module("bleets")
  .controller("BleetNewController", [
    "$state",
    "BleetFactory",
    BleetNewControllerFunction
  ]);

  function BleetNewControllerFunction($state, BleetFactory){
    this.bleet = new BleetFactory();
    console.log (this.bleet)
    this.create = function(){
    this.bleet.$save().then(function (response) {
      $state.go("bleetShow",({id: response.id}));
      })
    }

  }
}());
