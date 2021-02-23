const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;


next.addEventListener("click", function(){
    currentActive++

    if(currentActive>circles.length){
        currentActive=circles.length;
    }

    update();

})

prev.addEventListener("click", function(){
    currentActive--
    if(currentActive<1){
        currentActive=1;
    }
    update();
    
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx<currentActive){
            circle.classList.add("active");
           console.log(idx, currentActive)
        } else {
            circle.classList.remove("active");
            console.log(idx, currentActive)
        }
    })

    const actives = document.querySelectorAll(".active");
    //  console.log(actives.length-1, circles.length-1);
    progress.style.width = ((actives.length-1)/(circles.length-1)) * 100+"%";
    

    if (currentActive ===1 ){
        prev.disabled = true;
    } else if (currentActive === 4) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}