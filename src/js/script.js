$(document).ready(function () {
  $(".nav-menu__burger").on("click", function () {
    if (!$(this).hasClass("open")) {
      $(this).addClass("open");
      $("html").css("overflow-y", "hidden");
    } else {
      $(this).removeClass("open");
      $("html").css("overflow", "auto");
    }
  });
});
