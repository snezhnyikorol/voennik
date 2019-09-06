let data

// console.log(fetch('./assets/json/data.json'))

let fetchEr = () => {
    fetch('./assets/json/data.json')
    .then(response => {response.json();})
    .then(result => {
        this.reorder(result.slice(0,result.keys().length), 3);
        // this.setState({ cardsOG: result.slice(0,this.state.maxCards) });
    })
    .catch(e => e);
}

let reorder = (arr, columns) => {
    // READ HERE
    // this is the magic
    // re-order the array so the "cards" read left-right
    // cols === CSS column-count value
    
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
    // this.setState({ cards: out, columns: columns });
    console.log(out);
    data = out;
    
    // yes, I know Nick... you had another slicker ES6-y implementation
    // but this one I could understand :)
}

fetchEr();

// console.log(data)