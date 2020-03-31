/*Variaveis Globais*/
var op_value_bac;
var ae_value_bac;
var acc_value_bac;

var op_value_lic;
var ae_value_lic;
var acc_value_lic;

var op_value_not;
var ae_value_not;
var acc_value_not;

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
        alert("Por favor, preencha corretamente os itens.");
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

        localStorage.setItem(ul_id+"."+opName,json_parse); //Salvando no armazenamento
    }
    
    setCloseBtnFunc();
    totalLists();
    }


//Contando as horas
function totalLists() {
    //Limpar isso fazendo uma constante com as três classes
    
    const lists = ["op_list","ae_list","acc_list","op_list_lic","ae_list_lic","acc_list_lic", "op_list_not","ae_list_not","acc_list_not"];
    const required_hours = ["17 H/A","400 H","240 H","15 H/A","473 H","240 H", "8 H/A","280 H","240 H"]
    
    for (let list = 0; list < lists.length;list++){
        total = 0
        var input = document.getElementsByClassName(lists[list]); 
        for (let item = 0; item < input.length; item++) {
            total += parseInt(input[item].getAttribute("value"));
        }
        let content = + total.toFixed(2)+" /"+required_hours[list]
		
		/*Bacharel bar*/
		
		if (lists[list] == "op_list"){
			if (total < 17){
				op_value_bac = (total*18);
			} else {op_value_bac = 306 }
			bar_progress('bacharel_bar');
		}

		if (lists[list] == "ae_list"){
			if (total < 400){
				ae_value_bac = total;
			} else {ae_value_bac = 400 }
			bar_progress('bacharel_bar');
		}
		
		if (lists[list] == "acc_list"){
			if (total < 240){
				acc_value_bac = total;
			} else {acc_value_bac = 240 }
			bar_progress('bacharel_bar');
		}
		
		
		/*Licenciatura bar*/
		
		if (lists[list] == "op_list_lic"){
			if (total < 15){
				op_value_lic = (total*15);
			} else {op_value_lic = 270 }
			bar_progress('licenciatura_bar');
		}

		if (lists[list] == "ae_list_lic"){
			if (total < 473){
				ae_value_lic = total;
			} else {ae_value_lic = 473 }
			bar_progress('licenciatura_bar');
		}
		
		if (lists[list] == "acc_list_lic"){
			if (total < 240){
				acc_value_lic = total;
			} else {acc_value_lic = 240 }
			bar_progress('licenciatura_bar');
		}


		/*NOTURNO bar*/
		
		if (lists[list] == "op_list_not"){
			if (total < 8){
				op_value_not = (total*8);
			} else {op_value_not = 144 }
			bar_progress('not_bar');
		}

		if (lists[list] == "ae_list_not"){
			if (total < 280){
				ae_value_not = total;
			} else {ae_value_not = 280 }
			bar_progress('not_bar');
		}
		
		if (lists[list] == "acc_list_not"){
			if (total < 240){
				acc_value_not = total;
			} else {acc_value_not = 240 }
			bar_progress('not_bar');
		}

		


        document.getElementById(lists[list].replace("list","total")).textContent = content;
    }

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
            localStorage.removeItem(div.className+"."+div.id)
            div.style.display = "none";
            div.className = "";
            totalLists();
        }
    }
    totalLists()
}


