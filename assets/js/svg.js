import documentReady from "./lib/ready"

// remove all title from SVGs, if one needs a tooltip, then partial tooltip or shortcode should be used
documentReady(() => {
    const titles = document.querySelectorAll("svg>title")
    for (const title of titles) {
        title.remove()
    }
})
