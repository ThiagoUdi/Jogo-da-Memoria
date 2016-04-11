angular.module("g", []).controller("memoria", function($scope, $interval, $timeout) {


var etapa = 3;
var contador = 0;
$scope.carta = [];
$scope.casacarta = [];
var contador_ver = 30;
$scope.msg = "";
var cont = 0;
var level;
var sorteio = 0;
var p = true;
var ok = false;
var primeira = true;
$scope.acerto = 0;
var numcartasel = 0;
$scope.erros = 0;

sort = function (){
  if (level == 4){sorteio = Math.floor((Math.random() * 3));}
  if (level == 8){sorteio = Math.floor((Math.random() * 3));}
  if (level == 12){sorteio = Math.floor((Math.random() * 3));}

}




opcaoJogo = function (){

    if ((level == 4) && (sorteio == 0)){
      $scope.carta[0] = "img/01.jpg";
      $scope.carta[1] = "img/03.jpg";
      $scope.carta[2] = "img/01.jpg";
      $scope.carta[3] = "img/03.jpg";
    }


    if ((level == 4) && (sorteio == 1)){
      $scope.carta[0] = "img/04.jpg";
      $scope.carta[1] = "img/04.jpg";
      $scope.carta[2] = "img/06.jpg";
      $scope.carta[3] = "img/06.jpg";
    }

    if ((level == 4) && (sorteio == 2)){
      $scope.carta[0] = "img/02.jpg";
      $scope.carta[1] = "img/09.jpg";
      $scope.carta[2] = "img/09.jpg";
      $scope.carta[3] = "img/02.jpg";
    }

//------------------------------------------//

if ((level == 8) && (sorteio == 0)){
  $scope.carta[0] = "img/01.jpg";
  $scope.carta[1] = "img/09.jpg";
  $scope.carta[2] = "img/03.jpg";
  $scope.carta[3] = "img/02.jpg";
  $scope.carta[4] = "img/09.jpg";
  $scope.carta[5] = "img/01.jpg";
  $scope.carta[6] = "img/02.jpg";
  $scope.carta[7] = "img/03.jpg";
}
if ((level == 8) && (sorteio == 1)){
  $scope.carta[0] = "img/10.jpg";
  $scope.carta[1] = "img/08.jpg";
  $scope.carta[2] = "img/03.jpg";
  $scope.carta[3] = "img/07.jpg";
  $scope.carta[4] = "img/07.jpg";
  $scope.carta[5] = "img/08.jpg";
  $scope.carta[6] = "img/10.jpg";
  $scope.carta[7] = "img/03.jpg";
}
if ((level == 8) && (sorteio == 2)){
  $scope.carta[0] = "img/05.jpg";
  $scope.carta[1] = "img/08.jpg";
  $scope.carta[2] = "img/02.jpg";
  $scope.carta[3] = "img/04.jpg";
  $scope.carta[4] = "img/02.jpg";
  $scope.carta[5] = "img/05.jpg";
  $scope.carta[6] = "img/04.jpg";
  $scope.carta[7] = "img/08.jpg";
}

//--------------------------------------//

if ((level == 12) && (sorteio == 0)){
  $scope.carta[0] = "img/05.jpg";//
  $scope.carta[1] = "img/08.jpg";//
  $scope.carta[2] = "img/02.jpg";//
  $scope.carta[3] = "img/04.jpg";//
  $scope.carta[4] = "img/02.jpg";//
  $scope.carta[5] = "img/05.jpg";//
  $scope.carta[6] = "img/04.jpg";//
  $scope.carta[7] = "img/08.jpg";//
  $scope.carta[8] = "img/10.jpg";//
  $scope.carta[9] = "img/09.jpg";//
  $scope.carta[10] = "img/10.jpg";//
  $scope.carta[11] = "img/09.jpg";//
}

if ((level == 12) && (sorteio == 1)){
  $scope.carta[0] = "img/08.jpg";//
  $scope.carta[1] = "img/05.jpg";//
  $scope.carta[2] = "img/10.jpg";//
  $scope.carta[3] = "img/09.jpg";//
  $scope.carta[4] = "img/10.jpg";//
  $scope.carta[5] = "img/08.jpg";//
  $scope.carta[6] = "img/09.jpg";//
  $scope.carta[7] = "img/05.jpg";//
  $scope.carta[8] = "img/02.jpg";//
  $scope.carta[9] = "img/04.jpg";//
  $scope.carta[10] = "img/02.jpg";//
  $scope.carta[11] = "img/04.jpg";//
}

if ((level == 12) && (sorteio == 2)){
  $scope.carta[0] = "img/01.jpg";//
  $scope.carta[1] = "img/03.jpg";//
  $scope.carta[2] = "img/03.jpg";//
  $scope.carta[3] = "img/06.jpg";//
  $scope.carta[4] = "img/01.jpg";//
  $scope.carta[5] = "img/10.jpg";//
  $scope.carta[6] = "img/07.jpg";//
  $scope.carta[7] = "img/09.jpg";//
  $scope.carta[8] = "img/10.jpg";//
  $scope.carta[9] = "img/07.jpg";//
  $scope.carta[10] = "img/06.jpg";//
  $scope.carta[11] = "img/09.jpg";//
}
}

virar = function (){

  $scope.msg = "Boa Sorte..";
  if (primeira){
    for (var i = 0; i < level; i++) {
      $scope.casacarta[i] = $scope.carta[i];
    }

    for (var i = 0; i < level; i++) {
      $scope.carta[i] = "img/virada.jpg";
    }
    primeira = false;
  }

}

$scope.tempo = function(){

  $interval(function () {
    if ((cont - 1) >= 0){
      cont = cont - 1;
      $scope.msg = "Você tem para memorizar " + cont + " segundos.";

    }
    else {virar();}
  }, 1000,16);


}

$scope.alerta = function (){

if (etapa == 1){
  level = 4;
  cont = 5;
  sort();
  opcaoJogo();
  $scope.tempo();

}
if (etapa == 2){
  level = 8;
  cont = 10;
  sort();
  opcaoJogo();
  $scope.tempo();

}
if (etapa == 3){
  level = 12;
  cont = 15;
  sort();
  opcaoJogo();
  $scope.tempo();

}

}

$scope.verifica = function (){

var acabou = 4;
var entrou = true;

  for (var i = 0; i <level; i++) {
    if($scope.carta[i] == "img/virada.jpg"){
      entrou = false;
    }
  }

  if ((acabou == 0)&&(entrou)){
    window.location.href="Jogo da Memoria.html";
    etapa = 2;
    primeira = true;
    $scope.alerta();
  }

  if (acabou == 1){
    window.location.href="JSN2.html";
    etapa = 2;
    primeira = true;
    $scope.alerta();
  }
  if (acabou == 2) {
    window.location.href="JSN3.html";
    etapa = 3;
    primeira = true;
    $scope.alerta();
  }
  if ((acabou == 4)&&(entrou)) {
    window.location.href="JSN4.html";
  }
  }

$scope.jogar = function (dig){
$scope.msg = "";

if ((p)&&($scope.carta[dig] == "img/virada.jpg")){
  $scope.carta[dig] = $scope.casacarta[dig];
  cartasel = $scope.casacarta[dig];
  numcartasel = dig;
  p = false;
  ok = true;

}
else{
  if (($scope.casacarta[dig] == cartasel)&& (ok) && ($scope.carta[dig] == "img/virada.jpg")){
    $scope.carta[dig] = $scope.casacarta[dig];
    $scope.carta[numcartasel]= $scope.casacarta[numcartasel];
    $scope.acerto = $scope.acerto + 1;
    p = true;
    ok = false;

  }
  if(($scope.casacarta[dig] != cartasel) && (ok) && ($scope.carta[dig] == "img/virada.jpg")){
    $scope.msg =" Essa não é par da escolhida..";
    cont = 5;
    $interval(function () {
      if ((cont - 1) >= 0){
        cont = cont - 1;
        $scope.carta[dig] = $scope.casacarta[dig];
        $scope.msg =" Essa não é par da escolhida.." + cont;

      }
      else {$scope.carta[dig] = "img/virada.jpg";
            $scope.carta[numcartasel]= "img/virada.jpg";
            $scope.msg = "";}
    }, 200,6);
    p = true;
    ok = false;
    $scope.erros = $scope.erros + 1;
  }
}

$scope.verifica();
}

$scope.conectar = function () {

 return "Conectado com o Java Script... OK....";
}
});
