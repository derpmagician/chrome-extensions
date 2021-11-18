let diceResults = [];
const quantityEl = document.querySelector("#quantity-el");
const facesEl = document.querySelector("#faces-el");
const randomBtn = document.querySelector("#random-btn");
const tipQuantity = document.querySelector("#tip-quantity");
const tipFaces = document.querySelector("#tip-faces");
const radomList = document.querySelector("#radom-list");


function tipStyle(quantity, faces) {
    if (quantity <= 0) {
        tipQuantity.classList.add("reveal");
        quantityEl.classList.add("move");
    } else {
        tipQuantity.classList.remove("reveal");
        quantityEl.classList.remove("move");
    }
    if (faces <= 1) {
        tipFaces.classList.add("reveal");
        facesEl.classList.add("move");
    } else {
        tipFaces.classList.remove("reveal");
        facesEl.classList.remove("move");
    }
}

function getDice(quantity, faces){
    tipStyle(quantity, faces);

    if (quantity > 0 && faces > 1) {
        return {
            number: quantity,
            faces: faces
        }
    } else {
        return {
            number: 0,
            faces: 0
        }
    }
}

function render(dices) {
    let listItems ="";
    for (let i = 0; i < dices.length; i++) {
        listItems += `
        <li>
            ${dices[i]}
        </li>
        `;
    }
    radomList.innerHTML = listItems
}

randomBtn.addEventListener("click", function(){
    let quantityVal = quantityEl.value;
    let facesVal = facesEl.value;
    let dice = getDice(quantityVal, facesVal);

    radomList.innerHTML = "";

    for (let i = 1; i <= dice.number; i++) {
        let result = Math.floor((Math.random() * dice.faces) + 1);
        diceResults.push(result);
        // radomList.innerHTML += `<li>${result}</li>` ;
        // console.log(diceResults[i-1]);
        render(diceResults);
    }
    
});

function mouseWheelMove(element , e) {
    let valNumber = parseInt(element.value)
    let y = e.deltaY;
    if (y < 0) {
        valNumber += 1;
    }
    else {
        valNumber -= 1;
    }
    element.value = valNumber;
}

quantityEl.addEventListener("mousewheel", function(e){
    mouseWheelMove(quantityEl, e)
});

facesEl.addEventListener("mousewheel", function(e){
    mouseWheelMove(facesEl, e)
});