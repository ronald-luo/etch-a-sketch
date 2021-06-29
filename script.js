// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('btn').addEventListener('click', handleForm)
// });

// const handleForm = (ev) => {
//     ev.preventDefault(); // stops page refresh
    

//     let search = {
//         inquiry: document.getElementById("value-field").value
//     }
//     let currentBlocks = document.getElementsByClassName('content').length
//     if (currentBlocks > 0) { // there is something already there
//         //console.log(document.getElementsByClassName('content'))
//         clear(currentBlocks)
//         sketchCreator(search.inquiry)
//     } else {
//         sketchCreator(search.inquiry)
//     }
// };
sketchCreator(5);
(function currentValue () {
    let slider = document.getElementById("value-field");
    let output = document.getElementById("form-value");
    
    output.innerHTML = slider.value;
    
    slider.oninput = function() { 
        let currentBlocks = document.getElementsByClassName('content').length
        output.innerHTML = this.value; 
        clear(currentBlocks)
        sketchCreator(slider.value)
    }
})();


function clear (blocks) {
    for (let i = 0; i < blocks; i++) {
        let elem = document.getElementById("content");
        elem.parentNode.removeChild(elem)
    }
}

function sketchCreator (rows) {
    const container = document.querySelector('#container');
    let square = rows * rows
    for (let i = 0; i < square ; i++) {
        temp = "div" + i
        temp = document.createElement('div')
        document.querySelector('#container').setAttribute('style',`grid-template-columns: repeat(${rows}, 50px);`)
        temp.classList.add('content');
        temp.setAttribute('id', 'content');  
        container.appendChild(temp)
    }
    const squares = document.querySelectorAll('.content')
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.background = colorGenerator()
        });
    })
    
}

function colorGenerator () {
    colors = ['red','yellow','green','blue']
    randColor = Math.floor(Math.random() * colors.length)
    return colors[randColor]
}