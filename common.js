$(function() {
  // slideについて
  function toggleChangeBtn() {
    var slideIndex = $(".slide").index($(".active"));
    $(".change-btn").show();
    if (slideIndex == 0) {
      $(".prev-btn").hide();
    } else if (slideIndex == $(".slide").length - 1) {
      $(".next-btn").hide();
    }
  }
  // SNSボタン
  $(".social-icon").hover(
    function() {
      $(this)
        .children("span")
        .animate(
          {
            "font-size": "30px"
          },
          300
        );
    },
    function() {
      $(this)
        .children("span")
        .animate(
          {
            "font-size": "24px"
          },
          300
        );
    }
  );

  // トップへ戻るボタン
  $("#top-btn").click(function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      "slow"
    );
  });

  // ボタンを押した場所へ動く
  $("header a").click(function() {
    var id = $(this).attr("href");
    var position = $(id).offset().top;
    $("html, body").animate(
      {
        scrollTop: position
      },
      600
    );
  });

  // スライドを動かす
  $(".change-btn").click(function() {
    var $displaySlide = $(".active");
    $displaySlide.removeClass("active");
    if ($(this).hasClass("next-btn")) {
      $displaySlide.next().addClass("active");
    } else {
      $displaySlide.prev().addClass("active");
    }
    toggleChangeBtn();
  });

  
});
