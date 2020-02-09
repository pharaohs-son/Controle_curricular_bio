
//Liberar checkbox com 2 argumentos
function double_determined_list(requisito1, requisito2, ...materias) {
	// Get your checkbox who determine the condition
	var determine = document.getElementById(requisito1);
	var determine2 = document.getElementById(requisito2);
	// Make a function who disabled or enabled your conditioned checkbox
	var disableCheckboxConditioned = function () {
		if (determine.checked == true && determine2.checked == true){
		  for (i=0; i<materias.length; i++){
				document.getElementById(materias[i]).disabled = false;
			}
		}
		else {
		  for (i=0; i<materias.length; i++) {
				document.getElementById(materias[i]).disabled = true;
				document.getElementById(materias[i]).checked = false;
			}
		}
	}
determine.onclick = disableCheckboxConditioned;
disableCheckboxConditioned();
}



//Desativas checkboxes
function off_other(...materias) {
	// Get your checkbox who determine the condition
	var determine = document.getElementById(materias[0]);
	// Make a function who disabled or enabled your conditioned checkbox
	var disableCheckboxConditioned = function () {
		if(determine.checked == false || determine.disabled == true) {
		  for (i=1; i<materias.length; i++){
		  		document.getElementById(materias[i]).checked = false;
				document.getElementById(materias[i]).disabled = true;
			}
		}
	}
determine.onclick = disableCheckboxConditioned;
disableCheckboxConditioned();
}


//Liberar checkbox com 3 argumentos
function triple_determined_list(requisito1, requisito2, requisito3, ...materias) {
	// Get your checkbox who determine the condition
	var determine = document.getElementById(requisito1);
	var determine2 = document.getElementById(requisito2);
	var determine3 = document.getElementById(requisito3);
	// Make a function who disabled or enabled your conditioned checkbox
	var disableCheckboxConditioned = function () {
		if (determine.checked == true && determine2.checked == true && determine3.checked == true){
		  for (i=0; i<materias.length; i++){
				document.getElementById(materias[i]).disabled = false;
			}
		}
		else {
		  for (i=0; i<materias.length; i++) {
				document.getElementById(materias[i]).disabled = true;
				document.getElementById(materias[i]).checked = false;
			}
		}
	}
determine.onclick = disableCheckboxConditioned;
disableCheckboxConditioned();
}




//Liberar checkbox com 1 argumentos
function determined_list(...materias) { 
	// Get your checkbox who determine the condition
	var determine = document.getElementById(materias[0]);
	// Make a function who disabled or enabled your conditioned checkbox
	var disableCheckboxConditioned = function () {
		if(determine.checked == false) {
		  for (i=1; i<materias.length; i++){
				document.getElementById(materias[i]).disabled = true;
				document.getElementById(materias[i]).checked = false;
			}
		}
		else {
		  for (i=1; i<materias.length; i++) {
			document.getElementById(materias[i]).disabled = false;
			}
		}
	}
determine.onclick = disableCheckboxConditioned;
disableCheckboxConditioned();
}



//Somar checkbox do bacharel
function totalIt() {
  var input = document.getElementsByName("product");
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  document.getElementsByName("total")[0].value = + total.toFixed(2);
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
  document.getElementsByName("total_lic")[0].value = + total_lic.toFixed(2);
}


//selecionar todos
function check_all(...materias) {
	// Get your checkbox who determine the condition
	var determine = document.getElementById(materias[0]);
	// Make a function who disabled or enabled your conditioned checkbox
	var enableCheckboxConditioned = function () {
		if(determine.checked == true) {
		  for (i=1; i<materias.length; i++){
				if (document.getElementById(materias[i]).disabled == false){
		  		document.getElementById(materias[i]).checked = true;
				document.getElementById(materias[i]).onchange();
				// Precisa fazer disparar o onclick de cada matéria
		  }
		 }
			
		}
		else {
			for (i=1; i<materias.length; i++){
		  		document.getElementById(materias[i]).checked = false;
				document.getElementById(materias[i]).onchange();

			}
		}
	}
	
determine.onclick = enableCheckboxConditioned;
enableCheckboxConditioned();
}

function all_check(...materias) {
	// Get your checkbox who determine the condition
	var determine = document.getElementById(materias[0]);
	// Make a function who disabled or enabled your conditioned checkbox
	var enableCheckboxConditioned = function () {
		if (determine.checked == true) {
			for (i=1; i<materias.length; i++){
		  		document.getElementById(materias[i]).checked = true;
			}
		}
		else {
		    for (i=0; i<materias.length; i++){
		  		document.getElementById(materias[i]).checked = false;
			}
		}
	}
determine.onclick = enableCheckboxConditioned;
enableCheckboxConditioned();
}




////////////////////////////////////////////////
////////////ARMAZENAMENTO EM BROWSER////////////
////////////////////////////////////////////////


const bach_disciplinas = ["BIO7003","BIO7240","CFS7001","ECZ7011","ECZ7021","MIP7011","MOR7001","QMC5235","BEG7012","BQA7002","CFS7002","ECZ7012","MTM3100","BEG7013","BEG7225","BOT7013", "ECZ7013","INE7003","MIP7013","MOR7003","BEG7024","BEG7034","BIO7011","BOT7014","ECZ7024","MEN7004","MIP7003","BEG7025","BEG7227","BIO7012","BOT7015","ECZ7015","ECZ7025","MIP7035","CFS7006","ECZ7016","ECZ7036","DGL7006","BEG7017","BEG7226","BIO7004","BIO7013","BOT7017","ECZ7050","FIL7007","DGL7007","BIO7006","BIO7015","ECZ7028","ECZ7038","FMC7008","BIO7009","BIO7016"];


const lic_disciplinas = ["LBIO7003","LBIO7240","LCFS7001","LECZ7011","LECZ7021","LMIP7011","LMOR7001","LQMC5235","LBEG7012","LBQA7002","LCFS7002","LECZ7012","LMTM3100","LBEG7013","LBEG7225","LBOT7013", "LECZ7013","LINE7003","LMIP7013","LMOR7003","LBEG7024","LBEG7034","LBIO7011","LBOT7014","LECZ7024","LMEN7004","LMIP7003", "LBEG7025","LBEG7227","LBIO7012","LBOT7015","LECZ7015","LECZ7025","EED5331","LMIP7035","PSI5137","LCFS7006","LECZ7016","MEN5601","LECZ7036","LDGL7006","LBIO7004","LBIO7013","LBOT7017","LECZ7050","LFIL7007","LDGL7007","LBIO7015","LBIO7016", "MEN7009", "MEN7341", "MEN7008", "LSB7904", "EED5186", "EED5185", "LBIO7009", "MEN7010"];

const disciplinas = bach_disciplinas.concat(lic_disciplinas);


document.addEventListener('DOMContentLoaded', function() {
	for (i = 0; i < disciplinas.length; i++){
		if (localStorage.getItem(disciplinas[i]) == "true"){
			document.getElementById(disciplinas[i]).disabled = false;
			document.getElementById(disciplinas[i]).checked = true;
		}
	}
	totalIt();
	totalIt_lic();
}, false);


function checkboxStorage(item_id, force_uncheck = false){
	if (force_uncheck){
		localStorage.setItem(item_id, "false");}
	else if (document.getElementById(item_id).checked){
		localStorage.setItem(item_id, "true");
	}
	else{
		localStorage.setItem(item_id,"false");
	}
}

////////////////////////////////////////////////
////////////ARMAZENAMENTO EM BROWSER////////////
////////////////////////////////////////////////


////////////////////////////////////////////////
////////////////BOTÕES DE SELEÇÃO///////////////
////////////////////////////////////////////////
/*
//Controle dos botÃµes de seleÃ§Ã£o
function selectAll(course){
  if (course=="bach"){
  	for (i = 0; i < bach_disciplinas.length; i++){
  		document.getElementById(bach_disciplinas[i]).checked = true;
  		document.getElementById(bach_disciplinas[i]).disabled = false;
  		localStorage.setItem(bach_disciplinas[i], "true");
  	}
  	totalIt();
  }else{
    	for (i = 0; i < lic_disciplinas.length; i++){
  		document.getElementById(lic_disciplinas[i]).checked = true;
  		document.getElementById(lic_disciplinas[i]).disabled = false;
  		localStorage.setItem(lic_disciplinas[i], "true");
  	}
	  totalIt_lic();
}}

function unselectAll(course){
  if (course=="bach"){
  	for (i = 0; i < bach_disciplinas.length; i++){
  		document.getElementById(bach_disciplinas[i]).checked = false;
  		localStorage.setItem(bach_disciplinas[i], "false");
  	}
  	totalIt();
  }else{
      	for (i = 0; i < lic_disciplinas.length; i++){
  		document.getElementById(lic_disciplinas[i]).checked = false;
  		localStorage.setItem(lic_disciplinas[i], "false");
  	}
  	totalIt_lic();
  }}
*/
////////////////////////////////////////////////
////////////////BOTÕES DE SELEÇÃO///////////////
////////////////////////////////////////////////
