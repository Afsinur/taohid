$(document).ready(function () {
  $("body").on("click", "div span#th_1", function () {
    var x = $(this).text();
    if (x == "তাওহিদ") {
      $(this).parent().toggleClass("_sp_dv_tgl_1");
      $("div.dv_2").toggleClass("pd_dv_2");
      $("div.dv_3").toggleClass("all_sd_1");
      $("div.dv_4").toggleClass("all_sd_1");
      $("div.dv_5").toggleClass("all_sd_1");
      $("div.cm_d1").toggleClass("dl_n");
      $("div.dv_6").removeClass("_t6");
      $("div.dv_7").removeClass("_t7");
      $("div.dv_8").removeClass("_t8");
      $("div.dv_9").removeClass("_t9");
      $("div.dv_10").removeClass("_t10");
      $("div.dv_11").removeClass("_t11");
      $("div.dv_12").removeClass("_t12");
      $("p.pp1").removeClass("_txa");
      $("p.pp2").removeClass("_txa");
      $("p.pp3").removeClass("_txa");
      $("p.pp4").removeClass("_txa");
    }
  });
  $("body").on("click", "p.cm_d1_sp1", function (params) {
    var x = $(this).text();
    if (x == "তাওহিদুল রুবুবিয়াহ্‌") {
      $("p.pp1").toggleClass("_txa");
      $("div.dv_6").toggleClass("_t6");
      $("div.dv_7").toggleClass("_t7");
    } else if (x == "তাওহিদুল আসমা-ওয়াস্‌সিফাত") {
      $("p.pp2").toggleClass("_txa");
      $("p.pp3").toggleClass("_txa");
      $("div.dv_8").toggleClass("_t8");
      $("div.dv_9").toggleClass("_t9");
      $("div.dv_10").toggleClass("_t10");
    } else if (x == "তাওহিদুল উলুহিয়াহ্‌") {
      $("p.pp4").toggleClass("_txa");
      $("div.dv_11").toggleClass("_t11");
      $("div.dv_12").toggleClass("_t12");
    }
  });
});
