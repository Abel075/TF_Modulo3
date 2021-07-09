
function mensaje(){
    let a = document.form_curso.nombre.value;
    let nombres = [];
    alert('Ingrese '+ a + ' nombres:');
    for( let i = 0; i < a; i++){
        let nombre= prompt('Nombre:');
        nombres[i] = nombre;       
        
    }
    document.write('<h1>Los nombres son: <h1>')
    document.write('<h2>'+ nombres +'</h2>');
      
}

function numeros(){
    let a = document.form_curso.resp.value;
    console.log(a);
    x = 100
    
        for (let i = 5; i < x; i++) {

            if( i % 5 == 0){
                // document.write(' ,'+i+'');
                if( a =='par' && i % 10 == 0){
                    document.write(' '+i+'');
                }
                if (a == 'impar' && !(i % 10 == 0)){
                    document.write(' '+i+'');
                }
            }
            
        }
        
    

}

function operaciones(){

    let lista = document.getElementById('opciones');
    let valor = lista.options[lista.selectedIndex].value;
    let texto = lista.options[lista.selectedIndex].text;
    let n1 = parseInt(document.form_curso.n1.value);
    let n2 = parseInt(document.form_curso.n2.value);
    
    
    if(valor ==1){
        resultado = n1 + n2;
    }
    if(valor ==2){
        resultado = n1 - n2;
    }
    if(valor ==3){
        resultado = n1 * n2;
    }
    

    alert('El resultado de la operacion '+texto+' entre: '+n1+' y '+n2+' es igual a: '+ resultado);


}