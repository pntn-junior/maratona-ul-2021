interval = null;
function findGetParameter(parameterName) {
    var result = "",tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}
function a2forms() {
    skipThis = false;
    var formsCollection = document.getElementsByTagName("form");
    for(var i=0;i<formsCollection.length;i++) {
        formulario = formsCollection[i];   
        for (var j = 0; j < formulario.elements.length; j++) {
            if (formulario.elements.item(j).type.toLowerCase() == "hidden" && formulario.elements.item(j).name.toLowerCase() == "id_afiliado_eduzz_032021") {
                skipThis = true;
                break;
            }
        }
        if(!skipThis) {
            var input = document.createElement("input");
            input.setAttribute("type", "hidden");
            input.setAttribute("name", "id_afiliado_eduzz_032021");
            input.setAttribute("value", findGetParameter("a"));
            formulario.appendChild(input);
        }             
    }
    clearInterval(this.interval);
    this.interval = setInterval(function () { 
                                    a2forms();
                                }, 3000);
}
if(findGetParameter("a")!="") {
    a2forms();    
}
