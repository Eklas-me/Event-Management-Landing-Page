$('.counter').counterUp({
  delay: 10,
  time: 1000
});

// prining switch

const pricing_switch = document.querySelector(".switch-button-checkbox");
const yearly = document.querySelector(".yearly");
const monthly =document.querySelector(".monthly");

pricing_switch.addEventListener("change", function(){ 
  if(pricing_switch.checked){
    monthly.classList.add("active");
    yearly.classList.remove("active");
    
  }
  else{
    monthly.classList.remove("active");
    yearly.classList.add("active");
  }
} , false);
