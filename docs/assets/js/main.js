$(function() {
  $('.carousel').slick({
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    prevArrow: '<button class="carousel__prev"></button>',
    nextArrow: '<button class="carousel__next"></button>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('#calendar').fullCalendar({
    height: 300,
    contentHeight: 300,
    defaultView: 'listYear',
    timeZone: 'America/Sao_Paulo',
    noEventsMessage: 'Sem eventos no momento',

    events: [
      {
        title: 'Editatona #MaisMulheresNaTecnologia',
        start: '2019-03-09T09:00:00-03:00',
        end: '2019-03-09T13:00:00-03:00',
        description: 'Você sabia que, de cada 100 artigos biográfico presentes na Wikipédia, apenas 17 são de mulheres? Faremos uma maratona de edição de artigos da Wikipédia para melhorar, criar e traduzir biografias de mulheres relevantes nas áreas de Ciências, Tecnologias, Engenharias e Matemática.',
        url: 'https://www.sympla.com.br/editatona-maismulheresnatecnologia__464725'
      },
      {
        title: 'Oficina Meu Primeiro Bug',
        start: '2019-03-16T09:00:00-03:00',
        end: '2019-03-16T18:00:00-03:00',
        color: 'red',
        description: 'Para inspirar as futuras gerações, organizaremos duas edições da oficina Meu Primeiro Bug para alunas do Ensino Médio, privilegiando aquelas de escola pública. Elas vão conhecer mulheres da área de tecnologia e aprender a programar a sua primeira página web',
        url: 'https://www.sympla.com.br/oficina-meu-primeiro-bug---maismulheresnatecnologia__464781'
      },
      {
        title: 'Oficina Meu Primeiro Bug',
        start: '2019-03-23T09:00:00-03:00',
        end: '2019-03-23T18:00:00-03:00',
        color: 'red',
        description: 'Para inspirar as futuras gerações, organizaremos duas edições da oficina Meu Primeiro Bug para alunas do Ensino Médio, privilegiando aquelas de escola pública. Elas vão conhecer mulheres da área de tecnologia e aprender a programar a sua primeira página web',
        url: 'https://www.sympla.com.br/oficina-meu-primeiro-bug---maismulheresnatecnologia-ii__464782'
      },
    ],
    eventRender: function(event, element) {
      element.find('.fc-list-item-title').append('<p style="font-size: 12px; margin-top:1em">'+event.description+'</p>');
    },
    eventClick: function(event) {
      if (event.url) {
        window.open(event.url);
        return false;
      }
    }
  })
});
