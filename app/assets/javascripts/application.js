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

  });

