import wait from "./lib/wait"

/**
 * width measures the width of an HTML element.
 * 
 * @param {HTMLElement} el the element to measure its width
 * 
 * @returns {number} the input element width
 */
const getWidth = el => {
    const originalStyle = el.getAttribute("style") || "";
    const none = el.classList.contains("d-none")

    el.style.position = 'absolute';
    el.style.visibility = 'hidden';
    el.style.display = 'block';
    el.style.left = '-9999px';
    if (none) el.classList.remove("d-none")

    const width = el.offsetWidth

    if (none) el.classList.add("d-none")
    el.setAttribute('style', originalStyle)

    return width
}

// wait for underline-nav to be initialized within 3000 milliseconds
wait("#underline-nav", 3000).then(nav => {
    /** @type {NodeList} */
    const items = nav.querySelector("ul").querySelectorAll("li")

    /** @type {HTMLButtonElement} */
    const button = nav.getElementById("menu-button")

    /** @type {HTMLElement} */
    const overlay = nav.getElementById("menu-overlay")

    // measure the whole navigation width and compute its mean
    let width = getWidth(button)
    items.forEach(el => width += getWidth(el))
    width /= items.length

    new ResizeObserver(() => {
        // Note: maybe fixed value 155, base width for a navigation element is invalid or not precise enough
        // can evolve in the future
        const showing = Math.floor(nav.clientWidth / width)

        // display (or not) the menu button overlay
        if (showing < items.length) {
            button.classList.remove("d-none")
        } else {
            button.classList.add("d-none")
            if(overlay.checkVisibility()) button.click() // close overlay in case it was opened
        }

        // loop over all underline-nav to show and unshow items depending on the number of elements to display
        for (let i = 0; i < items.length; i++) {
            const item = items[i]
            const link = document.getElementById(`${item.id}-overlay`)

            if (i < showing) {
                item.classList.remove("d-none")
                link.classList.add("d-none")
            } else {
                item.classList.add("d-none")
                link.classList.remove("d-none")
            }
        }
    }).observe(nav)
}).catch(console.error)
