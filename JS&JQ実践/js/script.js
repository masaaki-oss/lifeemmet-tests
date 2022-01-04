$(function(){
    const loadAnime = $('#load-animation');
    $(window).on('load', function(){
        loadAnime.delay(3500).fadeOut(1000);
    });
    function stopLoad(){
        loadAnime.delay(1000).fadeOut(700);
    }
    setInterval('stopLoad()', 10000);

    $('#js-nav a').on('click', function(){
        let hrefElement = $(this).attr('href');
        let headerHeight = $('#header').outerHeight(true);
        let position = $(hrefElement).offset().top-headerHeight;
        $('body,html').animate({
            scrollTop: position
        }, 500);
        return false;
    });

    // slick
    $('.slideShow').slick({
        autoplaySpeed: 2500, // 自動再生の速度
        speed: 1200, // スライド自体の速度
        autoplay: true, // 自動再生の設定
        infinite: true, // 永続化
        slideToShow: 1, // スライド数
        slideToScroll: 1, // スライドのスクロール数
        arrows: true, // 矢印の表示
        prevArrow: '<div class="slick_prev"></div>', // 矢印部分のHTML変更
        nextArrow: '<div class="slick_next"></div>', // 矢印部分のHTML変更
        dots: true, // 下部ドットナビゲーションの表示
        pauseOnFocus: false, // フォーカス時の一時停止の設定
        pauseOnHover: false, // マウスホバー時の一時停止の設定
        pauseOnDotsHover: false, // ドットマウスホバー時の一時停止の設定
      });

    //   fade in
    // 
    // 
    function fadeIn(){
        // fade up
        $('.fadeUpTrigger').each(function(){
            let scroll = $(window).scrollTop();
            let triTop = $(this).offset().top + 100;
            let winHeight = $(window).height();
            if(scroll >= triTop - winHeight) {
                $(this).addClass('fadeUp');
            } else {
                $(this).removeClass('fadeUp');
            }
        });

        // fade left
        $('.fadeLeftTrigger').each(function(){
            let scroll = $(window).scrollTop();
            let triTop = $(this).offset().top + 100;
            let winHeight = $(window).height();
            if(scroll >= triTop - winHeight) {
                $(this).addClass('fadeLeft');
            } else {
                $(this).removeClass('fadeLeft');
            }
        });

        // fade right
        $('.fadeRightTrigger').each(function(){
            let scroll = $(window).scrollTop();
            let triTop = $(this).offset().top + 100;
            let winHeight = $(window).height();
            if(scroll >= triTop - winHeight) {
                $(this).addClass('fadeRight');
            } else {
                $(this).removeClass('fadeRight');
            }
        });
    }
    $(window).scroll(function(){
        fadeIn();
    });
});