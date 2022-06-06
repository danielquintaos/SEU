function myFunction() {
    //document.getElementById("demo").style.fontSize = "25px";
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "black";        
  }

  $(document).ready(function() {
    $("#hidden").hover(function() {
      $(this).css("color", "black");
    },
    function() {
      $(this).hide();
    });

    $("button").click(function() {
        alert("Você foi alertado(a) sobre Integração avançada com JQuery + JSON + Ajax.");
    })
});

var getResDiv = "#get";

/* Função que faz uma requisição GET */
function TestGET(){
  var url = "https://jsonplaceholder.typicode.com/todos/1";

  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, false);
  xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

  $(getResDiv).append("<br />" + xhttp.responseText);
  $(getResDiv).append("<br />Seleção do <i>title</i>: " + JSON.parse(xhttp.response).title);
  //console.log(xhttp.responseText);
}