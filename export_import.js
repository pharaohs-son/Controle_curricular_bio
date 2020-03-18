//Gerar um arquivo de download
(function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)

//Capturar  o armazenamento e gerar um arquivo baixável
function exportData(){
    var dataToDownload = localStorage;
    
    console.save(dataToDownload, "controle_curricular.json")
}


function importData(){
    
    var file = document.getElementById("input_content_file").files[0];
    var reader = new FileReader();
    
    var ready = false;

    var check = function() {
    if (ready === true) {
        try{
        var new_storage = JSON.parse(result);
        localStorage.clear();
        
        for (var k in new_storage) {
            localStorage.setItem(k,new_storage[k]);
          }    
        loadData();
        }catch (e){
            alert("A página importa apenas arquivos .json gerados pelas nossas funções.")
        }
    }else{
        setTimeout(check, 500);
    }}

    reader.onloadend = function(evt) { 
        //Arquivo carregado
        result = evt.target.result;
        ready = true;
    };
    reader.readAsText(file,"UTF-8");

    check();
}