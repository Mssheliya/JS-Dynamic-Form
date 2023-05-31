const inputValue = document.querySelector("#inputType");
const labelFeild = document.querySelector("#labelValue");
const form = document.querySelector("#form");


function inputDiv(){
    const label = labelFeild.value;
    const type = inputValue.value;

    const div = document.createElement("div");
    const labelInput = document.createElement("label");
    labelInput.innerHTML = label;
    labelInput.classList.add("form-label");
    const input = document.createElement("input");
    input.type = type;
    input.classList.add("form-control");

    div.appendChild(labelInput);
    div.appendChild(input);

    form.appendChild(div);
}

labelFeild.addEventListener("keyup" ,(event) => {
    // console.log(event.key);
    const keypressed = event.key;
    if(keypressed === "Enter"){
        inputDiv();
        labelFeild.value = "";
        
    }
})