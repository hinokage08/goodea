// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery3
//= require rails-ujs
//= require jquery.turbolinks
//= require bootstrap-tagsinput.min
//= require turbolinks
//= require jquery/dist/jquery.js
//= require tinymce-jquery
//= require_tree .

$(function(){
    $fileField = $('#file')
    $($fileField).on('change', $fileField, function(e) {
      file = e.target.files[0]
      reader = new FileReader(),
      $preview = $("#img_field");
  
      reader.onload = (function(file) {
        return function(e) {
          $preview.empty();
          $preview.append($('<img>').attr({
            src: e.target.result,
            width: "100%",
            class: "preview",
            title: file.name
          }));
        };
      })(file);
      reader.readAsDataURL(file);
    });


    $('.slide').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 9000,
      speed: 2000,
      slidesToShow: 5,
  })

  $('.trend_slide').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 9000,
    speed: 2000,
    slidesToShow: 3,
  })

  $('.tag_image_slide').slick({
    dots: false,
    autoplay: false,
    autoplaySpeed: 9000,
    speed: 2000,
    slidesToShow: 5,
  })

  $('.rank_favorite_slide').slick({
    dots: false,
    autoplay: false,
    autoplaySpeed: 9000,
    speed: 2000,
    slidesToShow: 5,
  })

  $('.rank_pv_slide').slick({
    dots: false,
    autoplay: false,
    autoplaySpeed: 9000,
    speed: 2000,
    slidesToShow: 5,
  })

  $('.ranking_slide').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 9000,
    speed: 2000,
    slidesToShow: 1,
    prevArrow: '<div class="prev-arrow"></div>',
    nextArrow: '<div class="next-arrow"></div>'
  })

  $(function() {
    $('#left-btn').click(function() {
      $('.active').removeClass('active');
      $('.rank_favorite_container').addClass('active');
    });
  });

  $(function() {
    $('#right-btn').click(function() {
      $('.active').removeClass('active');
      $('.rank_pv_container').addClass('active');
    });
  });

  $('.menu-trigger').on('click',function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('nav').slideUp();
    } else {
      $(this).addClass('active');
      $('nav').slideDown();
    }
  });

  $('.freezeframe').freezeframe();

  $(function() {
    ScrollReveal().reveal('.about_article1, .about_article6, .about_article9',{
      delay: 100,
      distance: "100%",
      origin: "bottom",
      viewFactor: 0.9,
      rotate:	{ x: 0, y: 100, z: 180 }
    }
    );
  });

  $(function() {
    ScrollReveal().reveal('.about_article2',{
      delay: 100,
      distance: "100%",
      origin: "left",
      viewFactor: 0.9
    }
    );
  });
  
  $(function() {
    ScrollReveal().reveal('.about_article3',{
      delay: 100,
      distance: "100%",
      origin: "right",
      viewFactor: 0.8
    }
    );
  });


  $(function() {
    ScrollReveal().reveal('.about_article4, .about_article8, .about_article10',{
      delay: 300,
      distance: "100%",
      viewFactor: 0.8,
      origin: "top",
      duration: 2000
    }
    );
  });

  $(function() {
    ScrollReveal().reveal('.about_article5, .about_article7',{
      delay: 200,
      distance: "50%",
      viewFactor: 0.8,
    }
    );
  });

  });

