$(document).ready(function(){
  $('.user-content__playlists-wrap').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='ti-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='ti-angle-right' aria-hidden='true'></i></button>"
  });
});