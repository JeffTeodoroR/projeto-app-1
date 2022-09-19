// fiz essa função para pegar alguns inputs da pagina 
//e depois exibir o resultado em outro ponto da pagina
//o código não está sofisticado por eu só estar programando a
//poucos meses mas consegui a funcionalidade que queria na aplicação.
//aqui pego os valores dos inuts coloco os valores diferentes de 0 dentro
//da array e conto quantos campos tem a array, e divido o valor total 
//das somas dos campos no valor total de campos dentro da array.

function a5(){
    
    var n1 = document.querySelector("#camp1").value;
    var n2 = document.querySelector("#camp2").value;
    var n3 = document.querySelector("#camp3").value;
    var n4 = document.querySelector("#camp4").value;
    var n5 = document.querySelector("#camp5").value;
    var n6 = document.querySelector("#camp6").value;
    var total = document.querySelector("#valor_total1").value;

    let a1 = [];

    if(n1>0){
        a1.push(n1);
    }
    if(n2>0){
        a1.push(n2);
    }
    if(n3>0){
        a1.push(n3);
    }
    if(n4>0){
        a1.push(n4);
    }
    if(n5>0){
        a1.push(n5);
    }
    if(n6>0){
        a1.push(n6);
    }

    let a3 = a1.length;
    let a4 = total/a3;
    let a2 = parseFloat(a4);
    let a8 = a2.toFixed(1);

//Aqui eu trato o NaN por que ocorre algumas vezes divisão de 0 por 0.
//sendo assim retorno o 0 ou o valor da divisão !=0.

    if(isNaN(a8)){

        res1.innerHTML = 0;
        return Number(res1.innerHTML);

    }
    else{

        res1.innerHTML = a8;
        return Number(res1.innerHTML);

    }

};

//aqui faço a soma dos campos input que recebem valores na pagina
//e retorno o valor para um output para exibir o valor total dos campos.

    function a6(){

        a7 = valor_total1.innerHTML = Number(camp1.value)+Number(camp2.value)+Number(camp3.value)+Number(camp4.value)+Number(camp5.value)+Number(camp6.value);

};