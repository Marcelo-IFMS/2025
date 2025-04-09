$("#menu").load("componente/menu.html");
$("#rodape").load("componente/rodape.html");
function menu(link) {
    alert(link);
    $("#conteudo").load(`pages/${link}.html`); 
    
}

//https://github.com/Marcelo-IFMS/infoA2025