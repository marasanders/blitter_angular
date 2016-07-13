"use strict";

(function(){
  angular
    .module( "bleets" )
    .controller( "BleetEditController", [
      "$state",
      "BleetFactory",
      "$stateParams",
      BleetEditControllerFunction
    ]);

  function BleetEditControllerFunction( $state, BleetFactory, $stateParams ){
    this.bleet = BleetFactory.get({id: $stateParams.id});
    this.update = function(){
      this.bleet.$update({id: $stateParams.id}).then(function() {
        $state.go("bleetShow",({id: $stateParams.id}))
      })
    }
    this.destroy = function(){
      this.bleet.$delete({id: $stateParams.id}).then(function() {
        $state.go("bleetIndex");
      })
    }
 }

}());
