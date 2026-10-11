import documentReady from "./lib/ready"
import { escape, sanitize } from "./lib/sanitize"

/**
 * hashchange tries to add aria-selected property to the element associated with current URL hash
 *
 * @param {HashChangeEvent|undefined} e the hashchange event
 */
const hashchange = e => {
    const id = decodeURIComponent(window.location.hash.substring(1))

    // remove old aria-selected
    if (e?.oldURL) {
        const start = window.location.href.replace(window.location.hash, "")
        const previousID = decodeURIComponent(e.oldURL.replaceAll(start, "")).substring(1)
        document.getElementById(`${previousID}-item`)?.removeAttribute("aria-selected")
    }

    document.getElementById(`${id}-item`)?.setAttribute("aria-selected", "true")
}

window.addEventListener("hashchange", hashchange)
documentReady(hashchange)

documentReady(() => {
    // Note: could handle h3, h4, h5, h6 but a link next to them looks odd
    const titles = document.querySelectorAll(".markdown-body h1, .markdown-body h2")

    for (const title of titles) {
        title.classList.add("markdown-heading")

        const content = title.textContent
        const inner = `<span class="heading-element">${escape(content)}</span><a class="anchor" href="#${escape(title.id)}">{{ strings.Replace ("/static/primer/link-16.svg" | readFile) "\n" "" }}</a>`

        title.innerHTML = sanitize(inner)
    }
})

documentReady(() => {
    const button = document.getElementById("headings-button")
    const overlay = document.getElementById("headings-overlay")
    if (!overlay) {
        return
    }

    const toggle = open => {
        overlay.hidden = !open
        button.setAttribute("aria-expanded", open)
    }

    document.addEventListener("click", e => {
        if (button.contains(e.target)) {
            toggle(overlay.hidden)
        } else if (!overlay.contains(e.target) || e.target.closest("a")) {
            toggle(false)
        }
    })
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && !overlay.hidden) {
            toggle(false)
            button.focus()
        }
    })
})
