import documentReady from "./lib/ready"

documentReady(() => {
    const copy = '{{ strings.Replace ("/static/primer/copy-16.svg" | readFile) "\n" "" }}'
    const copied = '{{ strings.Replace ("/static/primer/check-16.svg" | readFile) "\n" "" }}'
    const noCopied = '{{ strings.Replace ("/static/primer/x-16.svg" | readFile) "\n" "" }}'

    // setup highlights copy buttons
    const highlights = document.querySelectorAll("div.highlight")
    for (const highlight of highlights) {
        highlight.classList.add("d-flex", "flex-justify-between")

        // create clipboard div
        const clipboard = document.createElement("div")

        // create copy button
        const button = document.createElement("button")
        button.classList.add("Button", "Button--iconOnly", "Button--invisible", "Button--small", "octicon", "m-2")
        button.ariaLabel = '{{ T "arias.copy" }}'

        // create polite live region announcing the copy result to assistive technologies
        const status = document.createElement("span")
        status.classList.add("sr-only")
        status.role = "status"

        // change copy button icon when it's clicked, depending on clipboard copy success
        let copyTimeout = 0
        button.addEventListener("click", () => {
            navigator.clipboard
                .writeText(highlight.firstElementChild.textContent)
                .then(() => {
                    button.innerHTML = copied
                    button.classList.add("copied")
                    status.textContent = '{{ T "arias.copied" }}'
                })
                .catch(e => {
                    button.innerHTML = noCopied
                    button.classList.add("not-copied")
                    status.textContent = '{{ T "arias.copy_failed" }}'
                    console.error(e)
                })
                .finally(() => {
                    clearTimeout(copyTimeout)
                    copyTimeout = setTimeout(() => {
                        button.innerHTML = copy
                        button.classList.remove("copied", "not-copied")
                        status.textContent = ""
                    }, 1000)
                })
        })

        button.innerHTML = copy
        clipboard.append(button, status)
        highlight.appendChild(clipboard)
    }
})
