// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const headline = document.querySelector(".headline");
    const bottomline = document.querySelector(".bottomline");
    const sidebarbuttons = document.querySelectorAll(".content__sidebaritem--link");
    const midbarrounds = document.querySelectorAll(".content__midbar-round");

    // Set bottom line to be the same height as the headline
    if (headline && bottomline) {
        // Use a small timeout to ensure CSS is fully applied
        setTimeout(() => {
            const headlineHeight = headline.offsetHeight;
            if (headlineHeight > 0) {
                bottomline.style.height = `${headlineHeight}px`;
            }
        }, 100);
    }

    // Attach event listeners to each menu item.
    // When mouseover, change background colour of menu item & round
    // when mouseout, remove that change.
    sidebarbuttons.forEach((button, index) => {
        if (button && midbarrounds[index]) {
            button.addEventListener("mouseover", (evt) => {
                button.classList.add("content__sidebaritem--active");
                midbarrounds[index].classList.add("content__midbar-round--active");
            });
            button.addEventListener("mouseout", (evt) => {
                button.classList.remove("content__sidebaritem--active");
                midbarrounds[index].classList.remove("content__midbar-round--active");
            });
        }
    });
});
