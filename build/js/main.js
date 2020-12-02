$(document).ready(function(){

  /*
    Menu
  */
  // Menu Active
  $('#sidebar ul li').click(function(){
    $('li').removeClass("active");
    $(this).addClass("active");
	});


  // Menu e Redes Sociais aparecem depois da introdução
  alturaImg = $('.introducao__highlight').height();
  $(window).on('scroll', function() {
    if($(window).scrollTop() < alturaImg) {
      $('#sidebar').removeClass('fixed-menu');
      $('.social-anchor').removeClass('fixed-menu');
      return;
    }
    $('#sidebar').addClass('fixed-menu');
    $('.social-anchor').addClass('fixed-menu');
  });


  // Scroll do Menu acomopanhando o Conteúdo
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();

    $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
        $('#sidebar li.active').removeClass('active');
        $('#sidebar li').eq(i).addClass('active');
      }
    });
  }).scroll();






  /*
    LAI
  */

  // cause parallax to recalculate dimensions
  $(".lai__highlight__button").click(function(){
    $(".main-content--purple").slideToggle(function(){
        $(window).trigger('resize.px.parallax');
    });
  });


  $("#hide").click(function(){
    $(".main-content--purple").hide(function(){
        // $('html, body').animate({
        //   scrollTop: $(".lai__highlight").offset().top
        // }, 2500)
        $(window).trigger('resize.px.parallax');
    });
  });






  /*
    CHATBOT
  */
  // ChatBot Toogle
  $(".robot__mobile__header").click(function(){
      $(this).siblings(".robot__mobile__main").slideToggle("slow");
  });

  // ChatBot aparece depois do texto
  showChatbot = $('.introducao__highlight').height();
  $(window).on('scroll', function() {
    if($(window).scrollTop() < showChatbot) {
      $('.robot__mobile').removeClass('chatbot__fixed');
      return;
    }
    $('.robot__mobile').addClass('chatbot__fixed');
  });

});






/*
  PARALLAX
*/
// $(document).ready(function(){
//   $('.highlight__banner').each(function(){
//     var $obj = $(this);
//
//     $(window).scroll(function() {
//       var yPos = -($(window).scrollTop() / $obj.data('speed'));
//       var bgpos = '50% '+ yPos + 'px';
//       $obj.css('background-position', bgpos );
//     });
//   });
// });

// smoothScroll(window,parallax);






/*
  TROCA DE TEXTO DO CHATBOT
*/
$(document).ready(function () {
  function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;

    if (window_top > div_top) {
        $('#sticky').addClass('stick');
    }
    else {
        $('#sticky').removeClass('stick');
    }
  }

  $(function () {
    $(window).scroll(function(){
      sticky_relocate();
      if($(window).scrollTop() > $('#section1').offset().top
         && $(window).scrollTop() < $('#section1').offset().top + $('#section1').outerHeight(true)
      ){
         $('#sticky .robot__mobile__main--text').text('Além do salário, deputados federais têm uma verba que varia de R$ 30.788,66 a R$ 45.612,49 por mês para auxiliar seu trabalho.');
      }else if($(window).scrollTop() > $('#section2').offset().top
         && $(window).scrollTop() < $('#section2').offset().top + $('#section2').outerHeight(true)
      ){
         $('#sticky .robot__mobile__main--text').text('Em 2017, a Câmara dos Deputados reembolsou mais de R$ 26 milhões aos deputados federais.');
      }else if($(window).scrollTop() > $('#section3').offset().top
         && $(window).scrollTop() < $('#section3').offset().top + $('#section3').outerHeight(true)
      ){
         $('#sticky .robot__mobile__main--text').text('Cada deputado federal pode gastar até R$ 12.713,00 mensais com a locação ou fretamento de veículos e têm o reembolso integral do valor garantido pela Câmara.');
      }else if($(window).scrollTop() > $('#section4').offset().top
         && $(window).scrollTop() < $('#section4').offset().top + $('#section4').outerHeight(true)
      ){
         $('#sticky .robot__mobile__main--text').text('O site da Câmara dos Deputados dá acesso a todos os reembolsos solicitados por parlamentares desde 2009.');
      }else if($(window).scrollTop() > $('#section5').offset().top
         && $(window).scrollTop() < $('#section5').offset().top + $('#section5').outerHeight(true)
      ){
         $('#sticky .robot__mobile__main--text').text('Só em 2017, a Câmara dos Deputados recebeu 17.611 solicitações de informação pela Lei do Acesso à Informação. ').append( '<a href="http://bd.camara.gov.br/bd/handle/bdcamara/35799" target="_blank"><strong>Fonte</strong></a>');
      }else if($(window).scrollTop() > $('#section6').offset().top
         && $(window).scrollTop() < $('#section6').offset().top + $('#section6').outerHeight(true)
      ){
         $('#sticky .robot__mobile__main--text').text('Vicentinho Júnior e Pedro Uczai usaram o limite de R$ 6 mil mensais de gastos em combustíveis e lubrificantes em 11 meses do ano de 2017; os gastos foram integralmente reembolsados pela Câmara.');
      }else if($(window).scrollTop() > $('#section7').offset().top
         && $(window).scrollTop() < $('#section7').offset().top + $('#section7').outerHeight(true)
      ){
         $('#sticky .robot__mobile__main--text').text('735 deputados federais já tiveram reembolsos suspeitos da Cota Parlamentar identificados pela Rosie.');
      }else if($(window).scrollTop() > $('#section8').offset().top
         && $(window).scrollTop() < $('#section8').offset().top + $('#section8').outerHeight(true)
      ){
         $('#sticky .robot__mobile__main--text').text('Seis empresas são responsáveis por prestar aos deputados federais serviços que, juntos, foram responsáveis por mais de R$ 9 milhões em reembolsos pela Cota Parlamentar nos últimos seis anos. ').append( '<a href="https://medium.com/@pedrovilanova/anuncie-aqui-um-olhar-nos-gastos-dos-deputados-com-divulga%C3%A7%C3%A3o-parlamentar-b282d67ba665" target="_blank"><strong>Fonte</strong></a>');
      }else{
      	// $('#sticky .robot__mobile__main--text').text('Any Text');
      }
    });
  });
});
