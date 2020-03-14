/*Controle das funções de lista da contagem de horas optativas e complementares*/


//Criar novo item clicando no botão "+"
function newElement(ul_id, ip1, ip2, force_new=false) {
    console.log("Creating new item list")
    var li = document.createElement("li");

    if (!force_new){
            var opName = document.getElementById(ip1).value; //Nome da atividade
            var opCredits = document.getElementById(ip2).value; //Horas
        
            document.getElementById(ip1).value = ""; //Limpando os inputs
            document.getElementById(ip2).value = "";
        }else{
            var opName = ip1;
            var opCredits = ip2;
    }
    var t = document.createTextNode(opName+" ("+opCredits+")");

    li.appendChild(t);
    if (opName === '' || opCredits === '') {
        console.log("Input fields not filled")
        alert("Por favor, preencha corretamente os intens.");
    } else {
        li.value = opCredits.toString(); //Armazenando os crétidos em 'value'
        li.id = opName; //Armazenando o nome no id
        li.className = ul_id; //Tranformando o item na classe da determinada hora
        document.getElementById(ul_id).appendChild(li); //Criando o item

        let json_parse = JSON.stringify({
            itemClass: ul_id,
            itemName: opName,
            itemValue: opCredits
        })
        
        localStorage.setItem(opName,json_parse); //Salvando no armazenamento

        
    }
    setCloseBtnFunc();
    totalLists();
    }


//Contando as horas
function totalLists() {
    //Limpar isso fazendo uma constante com as três classes
    
    const lists = ["op_list","ae_list","acc_list","op_list_lic","ae_list_lic","acc_list_lic"];
    const required_hours = ["17 H/A","400 H","200 H","15 H/A","473 H","240 H"]
    
    for (let list = 0; list < lists.length;list++){
        total = 0
        var input = document.getElementsByClassName(lists[list]); 
        for (let item = 0; item < input.length; item++) {
            total += parseInt(input[item].getAttribute("value"));
        }
        let content = + total.toFixed(2)+" /"+required_hours[list]

        document.getElementById(lists[list].replace("list","total")).textContent = content;
    }
    /*
    //Contando horas de optativas
    var input = document.getElementsByClassName("op_list"); //Todos os items de classe optativa
    var total = 0;
    for (var i = 0; i < input.length; i++) {
    total += parseFloat(input[i].getAttribute("value"));
    }

    document.getElementById("op_total").textContent = + total.toFixed(2);
    
    //Contando horas de extensão
    var input = document.getElementsByClassName("ae_list"); //Todos os items de classe extensão
    var total = 0;
    for (var i = 0; i < input.length; i++) {
        total += parseFloat(input[i].getAttribute("value"));
    }

    document.getElementById("ae_total").textContent = + total.toFixed(2);
    
    //Contando horas de acc
    var input = document.getElementsByClassName("acc_list"); //Todos os items de classe acc
    var total = 0;
    for (var i = 0; i < input.length; i++) {
    total += parseFloat(input[i].getAttribute("value"));
    }

    document.getElementById("acc_total").textContent = + total.toFixed(2);*/
    
}


totalLists(); //Executando contagem após script ser carregado

//Criar um botão para excluir um item da lista e adicionar a cada elemento
function setCloseBtnFunc(){
    var myNodelist = document.getElementsByTagName("LI");
    var i
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode(String.fromCharCode(10005));
        span.className = "list_close_button";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    //Função do botão excluir
    var close = document.getElementsByClassName("list_close_button");

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
            div.className = "";
            totalLists();
            checkboxStorage();
        }
    }
    totalLists()
}


