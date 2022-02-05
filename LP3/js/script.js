'use strict'
$(function(){

    // on load時に一番上に移動させる
    $('html,body').animate({ scrollTop: 0 }, '0.1');

    $('.accordion-content').click(function(){
        if($(this).hasClass('open')) {
            $(this).find('.a').slideUp();
            $(this).removeClass('open');
        } else {
            $('.open').find('.a').slideUp();
            $('.open').removeClass('open');
            $(this).find('.a').slideDown();
            $(this).addClass('open');
        }
    });

    // loading
    window.onload = function() {
        const spinner = document.getElementById('loading');
        var i = Math.floor(Math.random()*1000);
        console.log(i);
        $(spinner).delay(i).addClass('loaded');
        $('body').removeClass('loading');
    }

    function fadeIn() {
        $('.fadeUpTrigger').each(function(){// fadeUpTriggerクラスの各要素に対して
            let scroll = $(window).scrollTop();// スクロール位置を取得する
            let triTop = $(this).offset().top + 100;// 要素の上部より100px下の位置を取得
            let winHeight = $(window).height();// ウィンドウの高さを取得
            if (scroll >= triTop - winHeight){ // 画面内に要素が入ったかを判断
              $(this).addClass('fadeUp');// fadeUpクラスを付与
            }else{
              $(this).removeClass('fadeUp');
          }
          });
    }
    $(window).scroll(function () {// スクロールしたら

        fadeIn();// 関数を実行

    });

    // hamburger-menu
    $('.humburgar-menu').click(function(){

        $(this).toggleClass('active');

        if($(this).hasClass('active')) {
             $('.slide-menu').addClass('active');
        } else {
            $('.slide-menu').removeClass('active');
        }

        // $('.slide-menu').not(this).click(function(){

        //     $('.hamburgar-menu, .slide-menu').removeClass('active');

        // });

    });

  });