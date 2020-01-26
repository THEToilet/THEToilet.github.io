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

  // トップへ戻るボタン
  $("#top-btn").click(function() {
    $("html,body").animate(
      {
        scrollTop: 0
      },
      "slow"
    );
  });

  $("header a").click(function() {
    var id = $(this).attr("href");
    var position = $(id).offset().top;
    $("html, body").animate(
      {
        scrollTop: position
      },
      500
    );
  });
});
