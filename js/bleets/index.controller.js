"use strict";

(function(){
  angular
  .module("bleets")
  .controller("BleetIndexController", [
    "BleetFactory",
     BleetIndexControllerFunction
  ]);


  function BleetIndexControllerFunction(BleetFactory){
     this.bleets = BleetFactory.query();
     var self = this
     this.destroy = function(id){
     this.bleet = BleetFactory.get({id: id});
     this.bleet.$delete({id: id}).then(function() {
     self.bleets = BleetFactory.query()
     })
   }
  }
}());
