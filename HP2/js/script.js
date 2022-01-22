$(function(){

    // fadeUpしたい要素にクラスを追加しています
    $('footer, .contact, .business-disc article h3, .business-disc article p, .business-disc article img').addClass("fadeUpTrigger");

    function fadeIn() {
        $('.fadeUpTrigger').each(function(){// fadeUpTriggerクラスの各要素に対して
            let scroll = $(window).scrollTop();// スクロール位置を取得する
            let triTop = $(this).offset().top + 100;// 要素の上部より100px下の位置を取得
            let winHeight = $(window).height();// ウィンドウの高さを取得
            if (scroll >= triTop - winHeight){ // 画面内に要素が入ったかを判断
              $(this).addClass('fadeUp');// fadeUpクラスを付与
            }else{
            //   $(this).removeClass('fadeUp');
            }
          });
    }
    $(window).scroll(function () {// スクロールしたら

        // addScrollClass();

        fadeIn();// 関数を実行
    });

    // スライドショー
    $('.slide-wrapper').slick({
        dots:true,
        speed: 600
    });

});