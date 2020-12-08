var tabButtons = document.querySelectorAll('.tabContainer .buttonContainer buttons');
var tabPanels = document.querySelectorAll('.tabContainer .tabPanel');

function showPanel(panelIndex,colorCode){
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabPanels.forEach(function(node){
        node.style.display="none";
    });

    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}

showPanel(0,'#f44336');