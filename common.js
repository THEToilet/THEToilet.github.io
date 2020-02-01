$(function() {
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

  //slick
  $(".works-container").slick({
    // アクセシビリティ。左右ボタンで画像の切り替えをできるかどうか
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    // 中央のpadding
  });

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
});
