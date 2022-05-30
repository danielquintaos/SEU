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