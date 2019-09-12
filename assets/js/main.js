$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 50) {
      sticky.addClass('fixed');
    }
    else {
      sticky.removeClass('fixed');
    } 
  
    checkMap()
  });

  let menuState = true;
  $('.menu_btn').click(function () {
    menuState = !menuState;
    if (menuState) {
      $('.menu_mobile').slideUp('slow')
      $('.burger-1').css({'transform': 'rotate(0deg)', 'top': '0px'})
      $('.burger-2').css({'transform': 'scale(1)'})
      $('.burger-3').css({'transform': 'rotate(0deg)', 'top': '12px'})
    } else {
      $('.menu_mobile').slideDown('slow')
      $('.burger-1').css({'transform': 'rotate(45deg)', 'top': '6px'})
      $('.burger-2').css({'transform': 'scale(0)'})
      $('.burger-3').css({'transform': 'rotate(-45deg)', 'top': '6px'})
    }
  })

let fetchEr = () => {
    fetch('./assets/json/data.json')
    .then(response => { 
        return response.json();
    })
    .then(result => {
        let myArray = [];
        $.each(result, function(key, value) { 
        myArray.push(value);
        });
        // let data = reorder(myArray, 3);
        let data = myArray;
        render(data);
        // $('.review_container').masonry({
        //     itemSelector: '.review_item',
        //     columnWidth: 360,
        //     horizontalOrder: true,
        //     gutter: 15
        // });
    }, false)
    .catch(e => {
        console.log(e);
        return e;
    });
}


let reorder = (arr, columns) => {
    const cols = columns;
    const out = [];
    let col = 0;
    while(col < cols) {
        for(let i = 0; i < arr.length; i += cols) {
            let _val = arr[i + col];
            if (_val !== undefined)
                out.push(_val);
        }
        col++;
    }
    return out;
}

fetchEr();

let render = (data) => {
    let container = $('.review_container');
    let videoContainer = $('.review_video-container');
    data.forEach(el => {
        if (el.type === 'video') {
            $('<div/>', {
                class: 'review_video-item',
                append: $('<video>', {
                    class: 'review_video',
                    src: el.src,
                    poster: el.poster
                })
            }).appendTo(videoContainer);
        } else if (el.type === 'article') {
            $('<div/>', {
                class: 'review_item',
                append: $('<div/>', {
                    class: 'review_header row',
                    append: $('<img>', {
                        class: 'review_image',
                        src: el.image
                    }).add($('<h3>', {
                        class: 'review_title',
                        text: el.title
                    }))
                }).add($('<p>', {
                    class: 'review_text',
                    text: el.text
                }))
            }).appendTo(container);
        }
    });
}

var spinner = $('.ymap-container').children('.loader');

var check_if_load = false;

var myMapTemp, myPlacemarkTemp;
 

function init () {
  var myMapTemp = new ymaps.Map("map-yandex", {
    center: [53.906071, 27.558956], 
    zoom: 18, 
    controls: ['zoomControl', 'fullscreenControl'],
  });
  myMapTemp.behaviors.disable('scrollZoom');
  var myPlacemarkTemp = new ymaps.Placemark([53.906071, 27.558956], {
    balloonContent: 'ВОЕННИК.БАЙ<br>г. Минск, ул. Зыбицкая, 4'
    }, {
        preset: 'islands#blackHomeIcon'
    })

  myMapTemp.geoObjects.add(myPlacemarkTemp)
 
  
  var layer = myMapTemp.layers.get(0).get(0);
 
 
  waitForTilesLoad(layer).then(function() {
 
    spinner.removeClass('is-active');
  });
}
 

function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function() {
        resolve();
      });
    }
  });
}
 
function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}
 

function loadScript(url, callback){
  var script = document.createElement("script");
 
  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }
 
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}
 

function checkMap() {
  if (document.getElementById('map').getBoundingClientRect().y < document.documentElement.clientHeight) {
    
    if (!check_if_load) { 
 
	  	
        check_if_load = true; 
 
		
        spinner.addClass('is-active');
 
	
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
  
           ymaps.load(init);
        });                
      }
  }
}

$('.questions_card').on('click', (e) => {
    $(e.currentTarget).children('.questions_card-text').toggle('fast')
    console.log($(e.currentTarget).find('.questions_card-img').css('transform'))
    if ($(e.currentTarget).find('.questions_card-img').css('transform')!=='none') {
        $(e.currentTarget).find('.questions_card-img').css('transform', 'none')
    } else {
        $(e.currentTarget).find('.questions_card-img').css({
            'transform': 'rotate(180deg)',
            'transition': 'all 400ms'
        })
    }

})

let toogle = true;

// $('.review_more').on('click', (e) => {
//   let wrapper = $('.review_wrapper')
//   if ($(wrapper).hasClass('active')) {
//     $(wrapper).removeClass('active')
//     $('.review_more').text('Смотреть больше отзывов')
//   } else {
//     $(wrapper).addClass('active')
//     $('.review_more').text('Свернуть')
//   }
//   e.preventDefault();
// })

$('.review_more').on('click', (e) => {
  let wrapper = $('.review_wrapper')
  if (!$(wrapper).hasClass('active')) {
    $(wrapper).animate({height: $('.review_container').height()}, 600)
    $('.review_more').text('Свернуть')
    $(wrapper).addClass('active')
  } else {
    $(wrapper).animate({height: '500px'}, 600)
    $('.review_more').text('Смотреть больше отзывов')
    $(wrapper).removeClass('active')
  }
  e.preventDefault();
})