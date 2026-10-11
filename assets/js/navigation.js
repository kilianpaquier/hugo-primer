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
wait("#underline-nav", 3000).then(nav => {
    /** @type {NodeListOf<HTMLLIElement>} */
    const list = nav.querySelector("ul").querySelectorAll("li")

    /** @type { { current: boolean, li: HTMLLIElement, oli: HTMLLIElement, width: number }[] } */
    const items = []
    for (const li of list) {
        items.push({
            current: li.querySelector("[aria-current]") !== null,
            li,
            oli: document.getElementById(`${li.id}-overlay`),
            width: getWidth(li)
        })
    }

    /** @type {HTMLElement} */
    const menu = document.getElementById("menu")
    const menuWidth = menu.offsetWidth

    /** @type {HTMLButtonElement} */
    const button = document.getElementById("menu-button")

    /** @type {HTMLElement} */
    const overlay = document.getElementById("menu-overlay")

    new ResizeObserver(() => {
        const max = nav.clientWidth - menuWidth

        // loop over all underline-nav to show and hide items depending on the number of elements to display
        let width = 0
        let current = false
        for (const item of items) {
            width += item.width
            const show = width < max // show item

            item.li.style.setProperty("display", show ? "block" : "none", "important")
            item.oli.style.setProperty("display", show ? "none" : "block", "important")
            current ||= !show && item.current
        }

        if (current) {
            button.setAttribute("aria-current", "page")
        } else {
            button.removeAttribute("aria-current")
        }

        const hide = width < max // hide menu
        menu.style.setProperty("display", hide ? "none" : "flex", "important")
        if (hide && overlay.checkVisibility()) {
            button.click() // close overlay in case it was opened
        }
    }).observe(nav)
}).catch(console.error)
