function factorial(){
    var n = parseInt(prompt("Ingresa un Numero"));
    var f=1;
    for (var i=1;i<=n;i++){
        f*=i;
    }
    document.write("El factorial es : "+ f);
}

function fechaactual(){
    var fecha = new Date();
    document.write("Hoy es :" +fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear());
}

function mostrar1(){
    var nom=document.getElementById("nombre").value;
    var ed=document.getElementById("edad").value;
    alert("Su nombre es:"+nom);
    alert("y edad :"+ed);
}

function suma() {
    var n1 = parseInt(document.getElementById("uno").value);
    var n1 = parseInt(document.getElementById("dos").value);
    var suma = n1 + n2;
    document.write("La suma es : " + suma);
}

function menu(){
document.write("1.- Suma <br> 2.- Factorial <br> 3.- Fecha");    
}

function casos (){
    var op=parseInt(document.getElementById("txtop").value);
    alert ("Selecciono la opcion" +op);
    switch (op){
        case 1:
            factorial();
            break;
            case 2:
                fechaactual();
                break;
                case 3:
                    mostrar();
                    break                  
    }
}

function agregar(){

}

function cargarSueldos(array){
for (var i=0;i<array.length;i++){
    array[i]=parseInt(prompt("Ingrese sueldo"));
}
}

function calcularGastos(pagos){
    var acu=0
    for(var i=0; i<pagos.length;i++){
        acu+=pagos[i];
    }
    return acu;
}

function generarNumeros(){
    var dim=parseInt(prompt("Ingresa la dimencion"));
    var listaNum=new Array(dim);
    for(var i=0;i<listaNum.length;i++){
        listaNum[i]=parseInt(Math.random()*10);
    }
    document.write(listaNum.toString());
}