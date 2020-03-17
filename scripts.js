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
  document.getElementById("mandatory_total").textContent = + total.toFixed(2);
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
  document.getElementById("mandatory_total_lic").textContent = + total_lic.toFixed(2);
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


const bach_disciplinas = ["BIO7003","BIO7240","CFS7001","ECZ7011","ECZ7021","MIP7011","MOR7001","QMC5235","BEG7012","BQA7002","CFS7002","ECZ7012","MTM3100","BEG7013","BEG7225","BOT7013", "ECZ7013","INE7003","MIP7013","MOR7003","BEG7024","BEG7034","BIO7011","BOT7014","ECZ7024","MEN7004","MIP7003","BEG7025","BEG7227","BIO7012","BOT7015","ECZ7015","ECZ7025","MIP7035","CFS7006","ECZ7016","ECZ7036","DGL7006","BEG7017","BEG7226","BIO7004","BIO7013","BOT7017","ECZ7050","FIL7007","DGL7007","BIO7006","BIO7015","ECZ7028","ECZ7038","FMC7008","BIO7009","BIO7016"];


const lic_disciplinas = ["LBIO7003","LBIO7240","LCFS7001","LECZ7011","LECZ7021","LMIP7011","LMOR7001","LQMC5235","LBEG7012","LBQA7002","LCFS7002","LECZ7012","LMTM3100","LBEG7013","LBEG7225","LBOT7013", "LECZ7013","LINE7003","LMIP7013","LMOR7003","LBEG7024","LBEG7034","LBIO7011","LBOT7014","LECZ7024","LMEN7004","LMIP7003", "LBEG7025","LBEG7227","LBIO7012","LBOT7015","LECZ7015","LECZ7025","EED5331","LMIP7035","PSI5137","LCFS7006","LECZ7016","MEN5601","LECZ7036","LDGL7006","LBIO7004","LBIO7013","LBOT7017","LECZ7050","LFIL7007","LDGL7007","LBIO7015","LBIO7016", "MEN7009", "MEN7341", "MEN7008", "LSB7904", "EED5186", "EED5185", "LBIO7009", "MEN7010"];

const disciplinas = bach_disciplinas.concat(lic_disciplinas);

document.addEventListener('DOMContentLoaded', function() {
    console.log("Loading storage");
    //Contando listas
    var stored = localStorage;
    
    for (let i = 0; i< stored.length; i++){
        let stored_key = localStorage.getItem(stored.key(i));
        try {
            let list_item = JSON.parse(stored_key);
            newElement(list_item.itemClass, list_item.itemName,list_item.itemValue,force_new=true);
        } catch (e) {
            continue;
        }
    }
    setCloseBtnFunc();
    
    
    /*Set status of each subject gotten from Storage*/
    for (var i = 0; i < disciplinas.length; i++){
        if (localStorage.getItem(disciplinas[i]) == "checked"){
        document.getElementById(disciplinas[i]).disabled = false;
        document.getElementById(disciplinas[i]).checked = true;
    } else if (localStorage.getItem(disciplinas[i]) == "checked_enabled") {
        document.getElementById(disciplinas[i]).disabled = false;
        document.getElementById(disciplinas[i]).checked = false;
    }else if (localStorage.getItem(disciplinas[i]) == "disabled"){
        document.getElementById(disciplinas[i]).checked = false;
        document.getElementById(disciplinas[i]).disabled = true;
    }
    }
    
    /*Activate dark mode based on storage*/
    if (localStorage.getItem("theme") == "dark"){
      document.getElementById("darkmode").checked = true;
      dark();
    } else {
      document.getElementById("darkmode").checked = false;
    }
    
    totalIt();
	  totalIt_lic();
	
}, false);



function checkboxStorage(){
    //Reiniciando o armazenamento e refazendo tudo
    localStorage.clear();

    //Computando as checkbox marcadas
    for (var i = 0; i < disciplinas.length; i++){
        if (document.getElementById(disciplinas[i]).disabled === false && document.getElementById(disciplinas[i]).checked === true){
            localStorage.setItem(disciplinas[i], "checked");
        } else if (document.getElementById(disciplinas[i]).disabled === false) {
            localStorage.setItem(disciplinas[i],"checked_enabled");
        }else{
            localStorage.setItem(disciplinas[i],"disabled");
        }
        }

    //Computando as lista de horas complementares
    const lists = ["op_list","ae_list","acc_list","op_list_lic","ae_list_lic","acc_list_lic"];

    for (let list = 0; list < lists.length;list++){
        var input = document.getElementsByClassName(lists[list]); //Todos os items da lista
        for (let item = 0; item < input.length; item++) {
            let json_parse = JSON.stringify({
            itemClass: lists[list],
            itemName: input[item].id,
            itemValue: input[item].value}) ;
            localStorage.setItem(input[item].id,json_parse);
    }
    }
    totalIt();
    totalIt_lic();
}

function themeStorage(id){
  var dark = document.getElementById(id);
  if (dark.checked === true){
    localStorage.setItem("theme", "dark");
  }else {
    localStorage.setItem("theme", "light");
  }
}


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
function openTab(evt, tabName) {
  //Dechalando variáveis
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
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  evt.currentTarget.style.background = " #e54e43";
}
