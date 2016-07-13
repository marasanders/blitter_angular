"use strict";

(function(){
  angular
    .module( "bleets" )
    .factory( "BleetFactory", [
      "$resource",
      FactoryFunction
    ])

  function FactoryFunction($resource){
    return $resource("http://localhost:3000/bleets/:id", {}, {
        update: { method: "PUT" }
    });
  }
}());
