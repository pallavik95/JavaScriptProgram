const buttonvalue = document.getElementById("btn"); 
const formdata = document.getElementById("form1");

buttonvalue.addEventListener("click",  () => {
    const inputname = document.getElementById("namefield").value;
    const display = document.getElementById("disply");

  let string2 = (inputname !== inputname.charAt(0).toUpperCase() + inputname.slice(1))
  ? 
  display.innerText = inputname.charAt(0).toUpperCase() + inputname.slice(1)
  :
  display.innerText = inputname ;
  
});

