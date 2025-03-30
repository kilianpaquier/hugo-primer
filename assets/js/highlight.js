import documentReady from "./lib/ready"

documentReady(() => {
    const copy = '{{ strings.Replace ("/static/primer/copy-16.svg" | readFile) "\n" "" }}'
    const copied = '{{ strings.Replace ("/static/primer/check-16.svg" | readFile) "\n" "" }}'
    const noCopied = '{{ strings.Replace ("/static/primer/x-16.svg" | readFile) "\n" "" }}'

    // setup highlights copy buttons
    const highlights = document.querySelectorAll("div.highlight")
    for (let i = 0; i < highlights.length; i++) {
        const highlight = highlights[i]

        highlight.classList.add("d-flex", "flex-justify-between")

        // create clipboard div
        const clipboard = document.createElement("div")

        // create copy button
        const button = document.createElement("button")
        button.classList.add("Button", "Button--iconOnly", "Button--invisible", "Button--small", "octicon", "m-2")
        button.ariaLabel = '{{ lang.Translate "arias.copy" }}'

        // change copy button icon when it's clicked, depending on clipboard copy success
        let copyTimeout = 0
        button.addEventListener("click", () => {
            navigator.clipboard
                .writeText(highlight.firstElementChild.textContent)
                .then(() => {
                    button.innerHTML = copied
                    button.classList.add("copied")
                })
                .catch(e => {
                    button.innerHTML = noCopied
                    button.classList.add("not-copied")
                    console.error(e)
                })
                .finally(() => {
                    clearTimeout(copyTimeout)
                    copyTimeout = setTimeout(() => {
                        button.innerHTML = copy
                        button.classList.remove("copied", "not-copied")
                    }, 1000)
                })
        })

        button.innerHTML = copy
        clipboard.appendChild(button)
        highlight.appendChild(clipboard)
    }
})
