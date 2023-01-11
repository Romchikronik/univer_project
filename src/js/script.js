$(document).ready(function () {
  $(".nav-menu__burger").on("click", function () {
    if (!$(this).hasClass("open")) {
      $(this).addClass("open");
      $("html").css("overflow-y", "hidden");
      $(".nav-menu").slideDown(500);
      $(".nav-menu").addClass("fixed-top");
    } else {
      $(this).removeClass("open");
      $("html").css("overflow", "auto");
      $(".nav-menu").slideUp(500);
    }
  });
});
