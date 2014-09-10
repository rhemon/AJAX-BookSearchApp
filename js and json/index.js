
$("#search").keyup(function(){
  var searching = $("#search").val();
  var regExp = new RegExp(searching, 'i');
  $.getJSON("js and json/info.json", function(data){
    var output = "";

    $.each(data, function(key, val){
      if((val.name.search(regExp)!= -1) || (val.summary.search(regExp) != -1) || (val.author.search(regExp) != -1)){
        output += "<div class='row'><div class='result'>";
        output += "<h1>" + val.name + "</h1>";
        output += "<img src='images/" + val.image + "' class='img-responsive img-circle' />";
        output += "<big>By "+ val.author + "</big>";
        output += "<p>"+ val.summary + "</p>";
        output += "</div></div>";
        $("#result").html(output);
      }
    });

  });
});
