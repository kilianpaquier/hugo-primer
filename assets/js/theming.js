import wait from "./lib/wait"

/**
 * preferredColor returns the right theme depending on preferred color scheme of current OS
 *
 * @returns the right theme name to apply on page
 */
const preferredColor = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark": "light"
}

/**
 * themes is the slice of theme available
 *
 * it's a mapping between the theme name and its value,
 * since system theme either point to dark or light depending on the use
 */
const themes = [
    { name: "system", theme: preferredColor() },
    (() => {
        const theme = preferredColor() === "dark" ? "light": "dark"
        return { name: theme, theme }
    })(),
    (() => {
        const theme = preferredColor() === "dark" ? "dark": "light"
        return { name: theme, theme }
    })(),
]

/**
 * getTheme returns the right index for themes slice
 *
 * @returns the right theme index
 */
const getTheme = () => {
    const theme = localStorage.getItem("theme")
    if (!themes[theme]) {
        return 0
    }
    return parseInt(theme)
}

/**
 * setTheme sets the right document attributes to change the theme with CSS styles
 *
 * @param { {name: string, theme: string} } theme theme name to apply
 */
const setTheme = theme => {
    document.documentElement.setAttribute("data-color-mode", "auto")
    document.documentElement.setAttribute("data-light-theme", theme.theme)
    document.documentElement.setAttribute("data-dark-theme", theme.theme)
    document.documentElement.setAttribute("data-icon-theme", theme.name)
}

// update as fast as possible the theme to avoid rendering issues
setTheme(themes[getTheme()] ?? themes[0])

wait("#theme-button", 3000).then(button => {
    // change theme on click with a rotation
    button.addEventListener("click", () => {
        const theme = getTheme()
        const next = themes[theme+1] ?? themes[0]

        setTheme(next)
        localStorage.setItem("theme", theme+1)
    })
}).catch(console.error)
