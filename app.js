const inputValue = document.querySelector("#inputType");
const labelFeild = document.querySelector("#labelValue");
const form = document.querySelector("#form");
const radioOption = document.querySelector("#radioOption");
const radioOptionfeild = document.querySelector("#radioOptionfeild");

// Create Function for insert input feilds
function inputDiv(){
    const label = labelFeild.value;
    const type = inputValue.value;

    // if condition for textarea
    const div = document.createElement("div");
    let input = null;
    if(type === "textarea"){
        input = document.createElement("textarea");
    }
    else{
        input = document.createElement("input");
    }
    input.type = type;
    input.classList.add("form-control");

    // if condition for submit button
    const labelInput = document.createElement("label");
    if(type != "submit"){
        labelInput.innerHTML = `${label} :`;
    }
    else{
        input.classList.add("btn");
        input.classList.add("btn-success");
        input.value = label;
    }
    labelInput.classList.add("form-label");

    div.appendChild(labelInput);
    div.appendChild(input);

    form.appendChild(div);
}


labelFeild.addEventListener("keyup" ,(event) => {
    // console.log(event.key);
    const keypressed = event.key;
    if(keypressed === "Enter"){
        const label = labelFeild.value;
        const type = inputValue.value;
        switch (type) {
                
            case "radio":
                radioOptionfeild.style = "display : block;";
                labelFeild.style = "display : none;";
                inputValue.style = "display : none;";
                let closebtn = document.querySelector("#closebtn");

                let div = document.createElement("div");
                const labelInput = document.createElement("label");
                let br = document.createElement("br");
                labelInput.innerHTML = `${label} :`; 
                labelInput.classList.add("form-label");
                div.appendChild(labelInput);
                div.appendChild(br);

                radioOption.addEventListener("keyup" , (event)=> {
                    const keypressed = event.key;
                    if(keypressed === "Enter"){
                        br1 = document.createElement("br");
                        option = document.createElement("label");
                        option.innerHTML = radioOption.value;
                        option.classList.add("option-label");
                         input = document.createElement("input");
                         input.type = "radio";
                         input.name = label;
                        div.appendChild(option);
                        div.appendChild(input);
                        div.appendChild(br1);
                        radioOption.value = "";
                    }
                })
                closebtn.addEventListener("click", () => {
                    radioOptionfeild.style = "display : none;";
                    labelFeild.style = "display : block;";
                    inputValue.style = "display : block;";
                })
            
                form.appendChild(div);
                break;

            default:
                inputDiv();
                break;
        }
        // inputDiv();
        labelFeild.value = "";
        
    }
})