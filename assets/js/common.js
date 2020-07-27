$(document).ready(function () {
    $("#god").click(function () {
        $(".godcollection-container").show();
        $(".festivalcollection-container, .creativitycollection-container, .othercollection-container").hide();
    });
    $("#festival").click(function () {
        $(".festivalcollection-container").show();
        $(".godcollection-container, .creativitycollection-container, .othercollection-container").hide();
    });
    $("#creativity").click(function () {
        $(".creativitycollection-container").show();
        $(".godcollection-container, .festivalcollection-container, .othercollection-container").hide();
    });
    $("#others").click(function () {
        $(".othercollection-container").show();
        $(".godcollection-container, .festivalcollection-container, .creativitycollection-container").hide();
    });




    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $("#scrollTop").show("1000");
        } else {
          $("#scrollTop").hide("1000");
        }
        return false;
      });
      
      $("#scrollTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
      });
});