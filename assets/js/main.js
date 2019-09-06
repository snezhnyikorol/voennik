
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
    data.forEach(el => {
        if (el.type === 'video') {
            $('<div/>', {
                class: 'review_item',
                append: $('<video>', {
                    class: 'review_video',
                    src: el.src,
                    poster: el.poster
                })
            }).appendTo(container);
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


