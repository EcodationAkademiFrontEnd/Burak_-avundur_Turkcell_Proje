// $(document).ready(function () {
//     $(".product-list").slick({
//     dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//       responsive: [
//         {
//           breakpoint: 992,
//         settings: {
//             slidesToShow: 4,
//             slidesToScroll: 4,
//             infinite: true,
//             dots: true
//           },
//           breakpoint: 991,
//           settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//             },
//             breakpoint: 600,
//           settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//             },
//             breakpoint: 480,
//           settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//         },
//       ],
//       nextArrow:
//       '<div class="nextArrowBtn"><i class="tc tc-angle-right tc-3x"></i></div>',
//     prevArrow:
//       '<div class="prevArrowBtn"><i class="tc tc-angle-left tc-3x"></i></div>',
//     });
//   });

//   $('.autoplay').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });




$('.carousel .carousel-item').each(function(){
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});