/*Global Variaveis*/

var total_bac;
var total_lic_var;



/////////////////////////////////////////////////////////////////////
///////////////////////// PRE-REQUISITOS////////////////////////////
////////////////////////////////////////////////////////////////////


//Liberar checkbox com 1 argumento

function determined_list(...materias) { 
	// Get your checkbox who determine the condition
	var determine = document.getElementById(materias[0]);
	// Make a function who disabled or enabled your conditioned checkbox
	var disableCheckboxConditioned = function () {
		if(determine.checked === false) {
		  for (i=1; i<materias.length; i++){
				document.getElementById(materias[i]).checked = false;
				document.getElementById(materias[i]).disabled = true;
			}
		}
		else {
		  for (i=1; i<materias.length; i++) {
			document.getElementById(materias[i]).disabled = false;
			}
		}
	};
determine.onclick = disableCheckboxConditioned;
disableCheckboxConditioned();
}

///////////////////////////////////////////////////////////////

//Liberar checkbox com 2 argumentos
function double_determined_list(requisito1, requisito2, ...materias) {
	// Get your checkbox who determine the condition
	var determine = document.getElementById(requisito1);
	var determine2 = document.getElementById(requisito2);
	// Make a function who disabled or enabled your conditioned checkbox
	var disableCheckboxConditioned = function () {
		if (determine.checked === true && determine2.checked === true){
		  for (i=0; i<materias.length; i++){
				document.getElementById(materias[i]).disabled = false;
			}
		}
		else {
		  for (i=0; i<materias.length; i++) {
				document.getElementById(materias[i]).checked = false;
				document.getElementById(materias[i]).disabled = true;
			}
		}
	};
determine.onclick = disableCheckboxConditioned;
disableCheckboxConditioned();
}


///////////////////////////////////////////////////////////////////////////


//Liberar checkbox com 3 argumentos
function triple_determined_list(requisito1, requisito2, requisito3, ...materias) {
	// Get your checkbox who determine the condition
	var determine = document.getElementById(requisito1);
	var determine2 = document.getElementById(requisito2);
	var determine3 = document.getElementById(requisito3);
	// Make a function who disabled or enabled your conditioned checkbox
	var disableCheckboxConditioned = function () {
		if (determine.checked === true && determine2.checked === true && determine3.checked === true){
		  for (i=0; i<materias.length; i++){
				document.getElementById(materias[i]).disabled = false;
			}
		}
		else {
		  for (i=0; i<materias.length; i++) {
		    document.getElementById(materias[i]).checked = false;
				document.getElementById(materias[i]).disabled = true;
			}
		}
	};
determine.onclick = disableCheckboxConditioned;
disableCheckboxConditioned();
}

//////////////////////////////////////////////////////////////////////////
////////////////////////END PRE-REQUISITOS ///////////////////////////////
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
//////////////////////// DESATIVAR CECKBOX///////////////////////////////
//////////////////////////////////////////////////////////////////////////

function off_other(...materias) {
	// Get your checkbox who determine the condition
	var determine = document.getElementById(materias[0]);
	// Make a function who disabled or enabled your conditioned checkbox
	var disableCheckboxConditioned = function () {
		if(determine.checked === false || determine.disabled === true) {
		  for (i=1; i<materias.length; i++){
		  		document.getElementById(materias[i]).checked = false;
				  document.getElementById(materias[i]).disabled = true;
			}
		}
	};
determine.onclick = disableCheckboxConditioned;
disableCheckboxConditioned();
}


//////////////////////////////////////////////////////////////////////////
////////////////////////  END   CECKBOX   ///////////////////////////////
//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////
//////////////////////// CONTROLE DE HORAS ///////////////////////////////
//////////////////////////////////////////////////////////////////////////

//Somar checkbox do bacharel
function totalIt() {
  var input = document.getElementsByName("product");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementById("mandatory_total").textContent = + total.toFixed(2) + " H";
  total_bac = total.toFixed(2);
  bar_progress('bacharel_bar');
}


//Somar checkboxes da licenciatura
function totalIt_lic() {  
  var input = document.getElementsByName("product_lic");
  var total_lic = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total_lic += parseFloat(input[i].value);
    }
  }
  total_lic_var = total_lic.toFixed(2);
  bar_progress('licenciatura_bar');
  
  document.getElementById("mandatory_total_lic").textContent = + total_lic.toFixed(2) + " H";
}


////////////////////////////////////////////////
////////////////    DARK MODE    ///////////
////////////////////////////////////////////////

function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
} 


////////////////////////////////////////////////
////////////ARMAZENAMENTO EM BROWSER////////////
////////////////////////////////////////////////






/////////////////////////////////////////////////////
////////////END ARMAZENAMENTO EM BROWSER////////////
//////////////////////////////////////////////////////



////////////////////////////////////////////////
////////////////BOTOES DE SELECAO///////////////
////////////////////////////////////////////////

//Controle dos botões de seleção
function selectAll(id,...materias){
  for (var i=0;i<materias.length;i++){
    let materia = document.getElementById(materias[i]);
    if (document.getElementById(id).checked && materia.checked){
      continue;
    }else if (!document.getElementById(id).checked && !materia.checked){
      continue;
    }else{
      document.getElementById(materias[i]).click();
    }
    }
}

//Atualizar botão de seleção caso todas as matérias estejam ativadas/desativadas

function update_all(id,...materias){
  var listchecked = [];
  for (var i=0;i<materias.length;i++){
	let materia = document.getElementById(materias[i]);
  	if (materia.disabled === false){                    /*Ativa se todos os liberados checked*/
    	listchecked.push(materia.checked);
    }
  }
  if (listchecked.every((v,i,a)=>v===a[0])){
	  if (listchecked[0] === true){ 
		document.getElementById(id).checked = true;
	} else {
		document.getElementById(id).checked = false;
	}
  }
}

function off_all_button(allkey, alloff){
  if (document.getElementById(allkey).checked === false){
    document.getElementById(alloff).checked = false;
  }
}


////////////////////////////////////////////////////
////////////////END BOTOES DE SELECAO///////////////
////////////////////////////////////////////////////

////////////////////////////////////////////////
////////////////GERENCIAMENTO DE TABS///////////
////////////////////////////////////////////////
function openTab(evt) {
  //Declarando variáveis
  var i, tabcontent, tablinks;

  //Esconder todos os elementos com class="tab_content"
  tabcontent = document.getElementsByClassName("tab_content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  buttons = document.getElementsByClassName("tab_button");
  for(var j=0; j<buttons.length; j++){
    buttons[j].style.background = ""; //Voltando a cor de todos os botões para o valor padrão
  }
  
  /*//Remover classe "active" dos elementos class="tab_content"
  tablinks = document.getElementsByClassName("tab_button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "tab_button");
  }*/
    
  //Mostrar a tab selecionada, aplicar a cor de botão ativo e adicionar uma classe "active" no botão que abriu a tab
  document.getElementById(evt.target.id.replace("_btn","")).style.display = "block";
    localStorage.setItem("active_tab",evt.target.id);
  evt.currentTarget.style.background = " #e54e43";
}


function bar_progress(id){
	
    var elem = document.getElementById(id);
	if (id == 'bacharel_bar'){
		var obg = parseInt(total_bac);
		var op = parseInt(op_value_bac);
		var ae = parseInt(ae_value_bac);
		var acc = parseInt(acc_value_bac);
		var width = (((obg + op + ae + acc)/4618)*100).toFixed(2);
    } else {
		var obg = parseInt(total_lic_var);
		var op = parseInt(op_value_lic);
		var ae = parseInt(ae_value_lic);
		var acc = parseInt(acc_value_lic);
		var width = (((obg + op + ae + acc)/5489)*100).toFixed(2);
	}
	elem.style.width = width + "%";
	if (width > 10){
		elem.innerHTML = width + "% Concluído";
	} else { elem.innerHTML = width + "%";}
	if (width == 100){
		elem.innerHTML = width + "% Concluído, Parabéns!!!!";
	}
}
