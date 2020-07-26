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
});