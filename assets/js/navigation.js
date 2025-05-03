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

    el.style.position = 'absolute';
    el.style.visibility = 'hidden';
    el.style.display = 'block';
    el.style.left = '-9999px';

    const width = el.offsetWidth
    el.setAttribute('style', originalStyle)
    return width
}

// wait for underline-nav to be initialized within 3000 milliseconds
wait("underline-nav", 3000).then(nav => {
    /** @type {NodeListOf<HTMLLIElement>} */
    const list = nav.querySelector("ul").querySelectorAll("li")

    /** @type { { li: HTMLLIElement, oli: HTMLLIElement, width: number }[] } */
    const items = []
    for (const li of list) {
        items.push({
            li,
            oli: document.getElementById(`${li.id}-overlay`),
            width: getWidth(li)
        })
    }

    /** @type {HTMLButtonElement} */
    const button = document.getElementById("menu-button")
    const bwith = getWidth(button)

    /** @type {HTMLElement} */
    const overlay = document.getElementById("menu-overlay")

    new ResizeObserver(() => {
        const max = nav.clientWidth - bwith

        // loop over all underline-nav to show and unshow items depending on the number of elements to display
        let width = 0
        for (const item of items) {
            width += item.width
            const show = width < max // show item

            item.li.style.setProperty("display", show ? "block" : "none", "important")
            item.oli.style.setProperty("display", show ? "none" : "block", "important")
        }

        const hide = width < max // hide menu
        button.style.setProperty("display", hide ? "none" : "block", "important")
        if (hide && overlay.checkVisibility()) {
            button.click() // close overlay in case it was opened
        }
    }).observe(nav)
}).catch(console.error)
