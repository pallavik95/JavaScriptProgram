const firstcolor = document.getElementById("color1");
const secondcolor = document.getElementById("color2");
const resultcolor = document.getElementById("colormixerbox");
// const submitbtn = document.getElementById("submit");

const form = document.getElementById("colormixerform");

form.addEventListener("submit",function (event){
    event.preventDefault();
const firstcolorinput = firstcolor.value.toLowerCase();
const secondcolorinput = secondcolor.value.toLowerCase();

let mixedcolor;
switch(firstcolorinput){
    case "red":
        switch(secondcolorinput){
            case "blue":
                mixedcolor = "purple";
                break;
            
        case "yellow":
            mixedcolor = "orange";
            break;
        default : mixedcolor = "invalid color combination";
        }
    break;
    case "blue":
        switch(secondcolorinput){
            case "red":
                mixedcolor = "purple";
                break;
            case "yellow":
                mixedcolor = "green";
                break; 
        default : mixedcolor = "invalid color combination";    
        }
    break;
    case "yellow":
        switch(secondcolorinput){
            case "blue": mixedcolor = "green";
            break;
            case "red": mixedcolor = "orange";
            break;
            default : mixedcolor = "invalid color combination";
        }
    break;
    default: mixedcolor = "invalid color combination";
}
    if (mixedcolor == "invalid color combination"){
    resultcolor.style.backgroundColor = "white";
    }
    else {
        resultcolor.style.backgroundColor = mixedcolor;
    }

document.getElementById("colorname").textContent = mixedcolor;

});

