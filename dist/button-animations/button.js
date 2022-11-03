function rippleEffect(event) {
    const currentBtn = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(currentBtn.clientWidth, currentBtn.clientHeight);
    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.top = `${event.clientY - (currentBtn.offsetTop + (diameter / 2))}px`;
    circle.style.left = `${event.clientX - (currentBtn.offsetLeft + (diameter / 2))}px`;
    circle.classList.add("ripple");
    const ripple = currentBtn.getElementsByClassName("ripple")[0];
    if(ripple) {
        ripple.remove();
    }
    currentBtn.appendChild(circle);

}
const ripple_buttons = document.querySelectorAll(".btn-ripple");
ripple_buttons.forEach((btn) => {
    btn.addEventListener("click", rippleEffect);
});



function bubblyEffect(e) {
    const currentBtn = e.currentTarget;
    currentBtn.classList.add("animate");
    setTimeout(function() {
        currentBtn.classList.remove("animate");
    }, 750);
}

const bubbly_buttons = document.querySelectorAll(".btn-bubbly");
bubbly_buttons.forEach((btn) => {
    btn.addEventListener("click", bubblyEffect)
});
