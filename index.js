const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thankyou");
const submitButton = document.getElementById("submit");
const rateNum = document.getElementById("result");
const rating = document.querySelector(".rate");

rating.addEventListener("click", event=>{
    let numberSelected = event.target.innerText;
    rateNum.innerText = numberSelected;
    console.log(numberSelected)
    submitButton.addEventListener("click", () => {
        mainContainer.style.display = 'none' ;
        thanksContainer.style.display = 'flex'; 
    });
});
