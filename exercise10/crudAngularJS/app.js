angular.module('myApp', ['ngAnimate'])

.controller('ctrlCrud', function($scope) {
    var inc = 7;

    $scope.listaServicios = [
        {
            "id":1,
            "nombre":"Electricidad",
            "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "tipo": "Hogar"
        },
        {
            "id":2,
            "nombre":"Auxiliar Mecánico",
            "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "tipo": "Autos"
        },
        {
            "id":3,
            "nombre":"Chofer reemplazo",
            "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "tipo": "Autos"
        },
        {
            "id":4,
            "nombre":"Medico a domicilio",
            "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "tipo": "Salud"
        },
        {
            "id":5,
            "nombre":"Ambulancia",
            "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "tipo": "Salud"
        },
        {
            "id":6,
            "nombre":"Gasfitero",
            "descripcion": "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
            "tipo": "Hogar"
        }
    ];

    $scope.data = {
        model: null,
        availableOptions: [
            {id: '1', name: 'Salud'},
            {id: '2', name: 'Hogar'},
            {id: '3', name: 'Autos'}
        ]
    };

    $scope.selected = {};
    
    $scope.cancelarServicio = function() {
        $scope.newService.id = '';
        $scope.newService.nombre = '';
        $scope.newService.descripcion = '';
        $scope.newService.tipo = '';
    }
    
    $scope.editarServicio = function(id) {
        for (i in $scope.listaServicios) {
            if ($scope.listaServicios[i].id == id) {
                $scope.newService = angular.copy($scope.listaServicios[i]);
                scope.$apply();
            }
        }
    }
    
    $scope.agregarServicio = function() {
        if($scope.newService.id == null) {
            $scope.newService.id = inc++;
            $scope.listaServicios.push($scope.newService);
            scope.$apply();
        }
        else {
            for (i in $scope.listaServicios) {
                if ($scope.listaServicios[i].id == $scope.newService.id) {
                    $scope.listaServicios[i] = $scope.newService;
                }

            }
            scope.$apply();
        }
        $scope.newService = {};
    };
    
    $scope.eliminarServicio = function() {
        $scope.listaServicios.splice(this.$index, 1);
    }
    
    $scope.filtradoServicio = function( _tipo) {
        $scope.listaServicios.filter()
    }
})