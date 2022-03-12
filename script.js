$(document).ready(function () {
    $("#designpic").click(function () {
        $("#designpic").slideDown('2000').hide('1000');
        $("#designtxt").show('2000');
    });
    $("#designtxt").click(function () {
        $("#designtxt").slideUp('2000');
        $("#designpic").slideDown('2000');
    });
});

$(document).ready(function () {
    $("#developmentpic").click(function () {
        $("#developmentpic").slideDown('2000').hide('1000');
        $("#developmenttxt").show('2000');
    });
    $("#developmenttxt").click(function () {
        $("#developmenttxt").slideUp('2000');
        $("#developmentpic").slideDown('2000');
    });
});

$(document).ready(function () {
    $("#productpic").click(function () {
        $("#productpic").slideDown('2000').hide('1000');
        $("#producttxt").show('2000');
    });
    $("#producttxt").click(function () {
        $("#producttxt").slideUp('2000');
        $("#productpic").slideDown('2000');
    });
});
$(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#portfolio1").show();
    }).mouseout(function(){
      $("#portfolio1").hide();
    });
  });

  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#portfolio2").show();
    }).mouseout(function(){
      $("#portfolio2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#portfolio3").show();
    }).mouseout(function(){
      $("#portfolio3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#portfolio4").show();
    }).mouseout(function(){
      $("#portfolio4").hide();
    });
  });
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#portfolio5").show();
    }).mouseout(function(){
      $("#portfolio5").hide();
    });
  });
  $(document).ready(function(){
    $("#work6").mouseover(function(){
      $("#portfolio6").show();
    }).mouseout(function(){
      $("#portfolio6").hide();
    });
  });
  $(document).ready(function(){
    $("#work7").mouseover(function(){
      $("#portfolio7").show();
    }).mouseout(function(){
      $("#portfolio7").hide();
    });
  });
  $(document).ready(function(){
    $("#work8").mouseover(function(){
      $("#portfolio8").show();
    }).mouseout(function(){
      $("#portfolio8").hide();
    });
  });

$(document).ready(function () {
    $("form").submit(function (event) {
        var name = $("input#NAME").val();
        var email = $("input#EMAIL").val();
        var message = $("textarea#MESSAGE").val();
        if ($("input#NAME").val() && $("input#EMAIL").val()) {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please enter your name and email!");
        }

    });

 });