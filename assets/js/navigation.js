import wait from "./lib/wait"

// wait for underline-nav to be initialized within 3000 milliseconds
wait("#underline-nav", 3000).then(nav => {
    const items = nav.querySelector("ul").querySelectorAll("li")
    const button = document.getElementById("menu-button")
    const overlay = document.getElementById("menu-overlay")

    new ResizeObserver(() => {
        // Note: maybe fixed value 155, base width for a navigation element is invalid or not precise enough
        // can evolve in the future
        const showing = Math.floor(nav.clientWidth / 155)

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
