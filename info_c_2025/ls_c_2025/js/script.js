$("#menu").load("./componente/menu.html");
$("#rodape").load("./componente/rodape.html");
function menu(link) {
    $("#conteudo").load("./pages/" + link + ".html");
}