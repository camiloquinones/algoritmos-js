//suma

//multiplicacion
function multiplicacion(){
 var a =0;
var b=0;
var result=0;

a = parseInt(prompt ("ingrese el valor  de a para multiplicar"));  
b= parseInt(prompt("ingrese el valor de b"));

result=a*b;

alert("el seculatdo de la multiplicacion es "+ result);   
}


//divicion
function divicion(){
   var a =0;
var b=0;
var result=0;

a = parseInt(prompt ("ingrese el valor  de a a sumar"));  
b= parseInt(prompt("ingrese el valor de b"));

result=a/b;

alert("el seculatdo de la divicion es "+ result) ;
}


//resta
function suma (){
var a =0;
var b=0;
var suma=0;

a = parseInt(prompt ("ingrese el valor  de a a sumar"));  
b= parseInt(prompt("ingrese el valor de b"));

suma=a+b;

alert("el seculatdo de la suma es "+ suma);

}
function pulgadas(){
   var a=0
result=0
a=parseFloat(prompt("ingresa los metros a convertir"));

result=a*39.37
alert("el secultado de los metros a comvertir es " + result) 
}

function operaciones(){
 var a =0;
var b=0;
var suma=0;
var resta=0;
var divicion=0;
var multicacion=0;

a = parseInt(prompt ("ingrese el valor  de a a sumar"));  
b= parseInt(prompt("ingrese el valor de b"));

suma=a+b;
alert("el resulatado de las operaciones es "+ suma);
resta=a-b;
alert("el resulatado de las operaciones es "+ resta);
multiplicacion =a*b;
alert("el resulatado de las operaciones es "+ multiplicacion);
divicion=a/b;
alert("el resulatado de las operaciones es "+ divicion);

   
}


function area(){
  var area=0;
var b=0;
var a=0;

// parseint para convertir string en enteros 
a = parseFloat(prompt ("ingrese el valor  de a a incontrar el area "));  
b= parseFloat(prompt("ingrese el valor de b"));

area=b*a/2;
alert("el area es "+ area);  
}

function Numeromayor(){
   var a=0
   var b=0
   var c=0
   a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER DIGITO"));
   b = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO DIGITO"));
   c = parseInt(prompt("POR FAVOR INGRESE EL TERCER DIGITO"));
   if (a>=b && a>=c)
   alert("EL NUMERO MAYOR ES: "+ a)
   if (b>=a && b>=c)
   alert("EL NUMERO MAYOR ES: "+ b)
   if (c>=a && c>=b)
   alert("EL NUMERO MAYOR ES: "+ c)
   
   

}
function numeromenor(){
   var a=0
   var b=0
   var c=0
   a = parseInt(prompt("POR FAVOR INGRESE EL PRIMER DIGITO"));
   b = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO DIGITO"));
   c = parseInt(prompt("POR FAVOR INGRESE EL TERCER DIGITO"));
   if (a<=b && a<=c)
   alert("EL NUMERO MENOR ES: "+ a)
   if (b<=a && b<=c)
   alert("EL NUMERO MENOR ES: "+ b)
   if (c<=a && c<=b)
   alert("EL NUMERO MENOR ES: "+ c)

   

} 

function paroimpar(){
   var a=0
   a = parseInt(prompt("POR FAVOR INGRESE UN NUMERO"));
   
   if (a % 2 == 0) {
       alert("EL NUMERO " + a + " ES PAR");
   } else {
       alert("EL NUMERO "+ a + " ES IMPAR");
   }

   

}

function CUADRADO(){
   var a = 0;
   a = parseInt(prompt("POR FAVOR INGRESE UN NUMERO"));
   a= a*a
   alert ("EL CUADRADO DEL NUMERO ES: "+ a);
}

function AREADELTRIANGULO (){
   var b=0;
   var h=0;
   var area=0;
   b = parseInt(prompt("POR FAVOR INGRESE EL PRIMER VALOR"));
   h = parseInt(prompt("POR FAVOR INGRESE EL SEGUNDO VALOR"));
   area= b*h/2;
   alert ("EL RESULTADO DE EL AREA DEL TRIANGULO ES: " + area);
   }

   function centimetrosametros(){
      var a = 0;
      a = parseInt(prompt("POR FAVOR INGRESE UN VALOR DE CENTIMETROS"));
      a= 0.01 * a 
      alert ("EN METROS ES: "+ a);
  }
  
  
  function AÑO (){
      var b=0;
      b = parseInt(prompt("POR FAVOR INGRESE SU EDAD"));
      b= 2022-b
      alert ("EL AÑO EN QUE NACIO ES : " + b);
      }
  
      function CAPITAL (){
          var c=0;
          var a=0;
          var g=0;
          var i=0;
          c= parseInt(prompt("INGRESE EL CAPITAL POR FAVOR"));
          a= parseInt(prompt("INGRESE EL NUMERO DE AÑOS POR FAVOR"));
          i= 1,7* 12/100
          g=(c*i)*a
          g= g+c
          alert("EL RESULTADO ES " +g)
  
          
          }
  
          function calificaciones (){
              var a=0;
              var b=0;
              var c=0;
              var d=0;
              var e=0;
              var p=0;
              a= parseInt(prompt("INGRESE LA CALIFICACION UNO POR FAVOR (DE 10 A 50)"));
              b= parseInt(prompt("INGRESE LA CALIFICACION DOS POR FAVOR"));
              c= parseInt(prompt("INGRESE LA CALIFICACION TRES POR FAVOR"));
              d= parseInt(prompt("INGRESE LA CALIFICACION CUATRO POR FAVOR"));
              e= parseInt(prompt("INGRESE LA CALIFICACION CINCO POR FAVOR"));
              
              p=(a+b+c+d+e)/5
              if (p= 10<=29) {
                  alert("EL ESTUDIANTE REPROBO CON "+p);
              } else {
                  alert("EL ESTUDIANTE APROBO CON "+p);
              }
      
      
              
              }
// eventos y condiciones averiguar 

