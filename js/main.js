$(function () {
  // *********** ハンバーガー  *********//
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $(".mask").on("click", function () {
    $("header").removeClass("open");
  });

  // リンクをクリックした時にメニューを閉じる
  $(".nav a").on("click", function () {
    $("header").removeClass("open");
  });


//********* スクロール時のイベント *******
  $(window).scroll(function () {
    // 画面がスクロールされた時に実行する

    $(".fade-in-text").each(function () {
      // fadeinクラスに対して順に処理を行う
      // .each()：個別に処理を行うためのメソッド。繰り返し処理を行いながら各要素に対して操作を実行することができる。


      // スクロールした距離
      let scroll = $(window).scrollTop();
      // 現在のスクロール位置を取得する。
      // scrollTop()：要素のスクロール位置を取得

      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;

      // 画面の高さ
      let windowHeight = $(window).height();

      // fadeinクラスの要素が画面内にきたタイミングで要素を表示
      if (scroll > target - windowHeight + 10) {

        // 条件が満たされた場合、要素の不透明度（opacity）を1に設定し、Y軸方向に移動（translateY）させます。
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });

  }); 
});
