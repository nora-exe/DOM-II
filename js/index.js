// Your code goes here


// event: on scroll, background color changes to #B1D5E1

document.addEventListener("scroll", (event) => {
    // console.log("Wow, congrats! You selected me!");
    document.querySelector("body").style.backgroundColor = "#B1D5E1";    
});

// event: on resize, "Fun Bus" text color changes to #E34651

window.addEventListener("resize", (event) => {
    // console.log("Wow, congrats! You selected me!");
    document.querySelector(".logo-heading").style.color = "#E34651";
})

// event: on mouseenter, fun-bus.jpg scales up


document.querySelector(".intro img").addEventListener("mouseenter", (event) => {
    event.target.style.transform = "scale(2)";
})


// event: on mouseleave, fun-bus.jpg scales back to 1


document.querySelector(".intro img").addEventListener("mouseleave", (event) => {
    event.target.style.transform = "scale(1)";
})


// event: on mouseover, link background color changes to #E34651 & text color changes to white


document.querySelector("nav").addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "#B1D5E1";
    event.target.style.color = "white";
})


// event: on keydown (ctrl) background color changes to #FCB34C


document.addEventListener("keydown", (event) => {
    if (event.code === "ControlLeft") {
        document.querySelector("body").style.backgroundColor = "#FCB34C";
    } else {
        console.log(`You just hit the ${event.code} key!`);
    }
}) 



// event: on keyup (ctrl) background color changes to #FCEBE0


document.addEventListener("keyup", (event) => {
    if (event.code === "ControlLeft") {
        document.querySelector("body").style.backgroundColor = "#FCEBE0";
    } else {
        console.log(`You just let go of the ${event.code} key!`);
    }
}) 


// event: on click, all image opacity decreases

document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", (event) => {
        event.target.style.opacity = .25;
    })
});

// event: on double click (dblclick), all image opacity is restored + stop propagate!


document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("dblclick", (event) => {
        event.stopPropagation();
        event.target.style.opacity = 1;
    })
});


// event: on contextmenu, prevent context menu from appearing (preventDefault) and log "this is not allowed here!"

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log("this is not allowed here!");
});








