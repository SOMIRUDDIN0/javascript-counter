let box = document.querySelector(".box");
let plus = document.querySelector(".increament");
let minus = document.querySelector(".decreament");
let reset = document.querySelector(".reset");


count = 0;

const upDateCount = () => {
    box.innerHTML = (count);
    if (count >= 10 && count < 20) {
        box.style.color = "green";
    } else if (count >=20 && count < 50) { 
        box.style.color = "blue";
    } else if (count >= 50 && count < 80 ) {
        box.style.color = "#004242";
    } else if (count >= 80) {
        box.style.color = "red";
    } else {
        box.style.color = "black";
    }
        
    }


plus.addEventListener("click", () => {
    count++;
    upDateCount ();
    box.innerHTML = (count);
})

minus.addEventListener("click", () => {
    if (count > 0) {
        count--
    }
    upDateCount ();
    box.innerHTML = (count);
})


reset.addEventListener("click", () => {
    count = 0;
    upDateCount ();
    box.innerHTML = (count);
})


plus.addEventListener("keyup", () => {
    count++;
    upDateCount ();
    box.innerHTML = (count);
})

document.addEventListener("keyup" , (event) => {
    if (event.key === "+") {
        count++
    } else if (event.key === "-" && count > 0) {
        count--
    }
    upDateCount ();
});


document.addEventListener("keydown", () => {
    if (event.key === "ArrowUp")  {
        count++
    }
    upDateCount ();

    if (event.key === "ArrowDown" && count > 0) {
        count--
    }
    upDateCount ();
    if (event.key === "r") {
        count = 0
    }
    upDateCount ();
})


