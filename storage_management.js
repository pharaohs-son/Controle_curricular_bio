/* Listas de e botões de seleção*/
const bach_disciplinas = ["BIO7003","BIO7240","CFS7001","ECZ7011","ECZ7021","MIP7011","MOR7001","QMC5235","BEG7012","BQA7002","CFS7002","ECZ7012","MTM3100","BEG7013","BEG7225","BOT7013", "ECZ7013","INE7003","MIP7013","MOR7003","BEG7024","BEG7034","BIO7011","BOT7014","ECZ7024","MEN7004","MIP7003","BEG7025","BEG7227","BIO7012","BOT7015","ECZ7015","ECZ7025","MIP7035","CFS7006","ECZ7016","ECZ7036","DGL7006","BEG7017","BEG7226","BIO7004","BIO7013","BOT7017","ECZ7050","FIL7007","DGL7007","BIO7006","BIO7015","ECZ7028","ECZ7038","FMC7008","BIO7009","BIO7016"];


const lic_disciplinas = ["LBIO7003","LBIO7240","LCFS7001","LECZ7011","LECZ7021","LMIP7011","LMOR7001","LQMC5235","LBEG7012","LBQA7002","LCFS7002","LECZ7012","LMTM3100","LBEG7013","LBEG7225","LBOT7013", "LECZ7013","LINE7003","LMIP7013","LMOR7003","LBEG7024","LBEG7034","LBIO7011","LBOT7014","LECZ7024","LMEN7004","LMIP7003", "LBEG7025","LBEG7227","LBIO7012","LBOT7015","LECZ7015","LECZ7025","EED5331","LMIP7035","PSI5137","LCFS7006","LECZ7016","MEN5601","LECZ7036","LDGL7006","LBIO7004","LBIO7013","LBOT7017","LECZ7050","LFIL7007","LDGL7007","LBIO7015","LBIO7016", "MEN7009", "MEN7341", "MEN7008", "LSB7904", "EED5186", "EED5185", "LBIO7009", "MEN7010"];

const not_disciplinas = ["NOTBIO72024","NOTBIO7203","NOTBIO7245","NOTEED5331","NOTMEN7004","NOTQMC5235","NOTBEG7220","NOTBIO7230","NOTECZ7201","NOTMIP7013","NOTPSI5137","NOTBEG7205","NOTBIO7210","NOTBQA7008","NOTECZ7031","NOTBIO7004","NOTBEG7229","NOTBOT7201","NOTECZ7202","NOTMEN5601","NOTMIP7202","NOTBEG7211","NOTBIO7004","NOTBOT7025","NOTECZ7032","NOTEED8007","NOTBIO7246","NOTBOT7202","NOTDGL7066","NOTDGL7067","NOTECZ7203","NOTLSB7904","NOTMEN7016","NOTBEG7212","NOTBOT7026","NOTCFS7100","NOTMOR7110","NOTBEG7228","NOTBIO7015","NOTBIO7218","NOTFIL7007","NOTBIO7009","NOTBIO7016","NOTMEN7009","NOTMEN7341","NOTMEN7010"];

const disciplinas = bach_disciplinas.concat(lic_disciplinas, not_disciplinas);

const id_all = ["all_1","all_2","all_3","all_4","all_5","all_6","all_7","all_8","all_9", "all_lic_1", "all_lic_2", "all_lic_3", "all_lic_4", "all_lic_5", "all_lic_6", "all_lic_7", "all_lic_8", "all_lic_9", "all_lic_10", "all_not_1", "all_not_2", "all_not_3", "all_not_4", "all_not_5", "all_not_6", "all_not_7", "all_not_8", "all_not_9", "all_not_10"]

/*Definindo um event listener para carregar os dados depois que todos os elementos da página foram carregados*/
document.addEventListener('DOMContentLoaded', function () {
    data = localStorage;
    //Contando listas
    for (let i = 0; i< data.length; i++){
        let stored_key = localStorage.getItem(data.key(i));
        try {
            let list_item = JSON.parse(stored_key);
            if (list_item.itemValue){
                console.log(list_item)
                newElement(list_item.itemClass, list_item.itemName,list_item.itemValue,force_new=true);
            }
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
    
     /*Activate all buttons based on storage*/
     for (var k = 0; k < id_all.length; k++){
       if (localStorage.getItem(id_all[k]) == "on"){
         document.getElementById(id_all[k]).checked = true;
       } else {
         document.getElementById(id_all[k]).checked = false;
       }
     }

	
    
    /*Activate dark mode based on storage*/
    if (localStorage.getItem("theme") == "dark"){
      document.getElementById("darkmode").checked = true;
      dark();
    }
    
    /*Carregando ultima tab ativa*/
    if (localStorage.getItem("active_tab")){
        document.getElementById(localStorage.getItem("active_tab")).click();
    }
    else{document.getElementById("about_tab_btn").click();}
    
    totalIt();
    totalIt_lic();
	
}, false);

function checkboxStorage(){
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
    const lists = ["op_list","ae_list","acc_list","op_list_lic","ae_list_lic","acc_list_lic", "op_list_not","ae_list_not","acc_list_not"];

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

function allStorage(){
  for (var i = 0; i < id_all.length; i++){
    var nome = document.getElementById(id_all[i]);
    if (nome.checked === true){
      localStorage.setItem(id_all[i], "on");
    } else {
      localStorage.setItem(id_all[i], "off");
    }
  }
} 