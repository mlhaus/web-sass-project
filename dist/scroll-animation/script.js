const boxes = document.querySelectorAll(".box");

animateBoxes();

function animateBoxes() {
    boxes.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;
        console.log(boxTop);
        if(boxTop < window.innerHeight / 5 * 4) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });

    // for(let i = 0; i < boxes.length; i++) {
    //     let box = boxes[i];
    //     console.log(box);
    // }
}

window.addEventListener("scroll", animateBoxes);