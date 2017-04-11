angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];

    $http.get('v1/fotos')
    	.success(function(fotos){
    		$scope.fotos = fotos;
    	})
    	.error(function(erro){
    		console.log(erro);
    	});
    // padrão promisse
    /*var promisse = $http.get('v1/fotos');
    promisse.then(function(response){
    	$scope.fotos = response.data;
    }).catch(function(error){
    	console.log(error);
    });*/

});