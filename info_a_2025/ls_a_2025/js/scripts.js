$("#menu").load("componente/menu.html");
$("#rodape").load("componente/rodape.html");
function menu(link) {
    $("#conteudo").load(`pages/${link}.html`); 
}

//https://github.com/Marcelo-IFMS/2025/<info_a_2025>