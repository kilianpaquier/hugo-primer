import documentReady from "./lib/ready"
import { escape, sanitize } from "./lib/sanitize"

/**
 * hashchange tries to mark as current the headings overlay item associated with current URL hash
 *
 * @param {HashChangeEvent|undefined} e the hashchange event
 */
const hashchange = e => {
    const id = decodeURIComponent(window.location.hash.substring(1))

    // remove old current mark
    if (e?.oldURL) {
        const start = window.location.href.replace(window.location.hash, "")
        const previousID = decodeURIComponent(e.oldURL.replaceAll(start, "")).substring(1)
        const previous = document.getElementById(`${previousID}-item`)
        previous?.classList.remove("ActionListItem--navActive")
        previous?.firstElementChild?.removeAttribute("aria-current")
    }

    const current = document.getElementById(`${id}-item`)
    current?.classList.add("ActionListItem--navActive")
    current?.firstElementChild?.setAttribute("aria-current", "true")
}

window.addEventListener("hashchange", hashchange)
documentReady(hashchange)

documentReady(() => {
    // Note: could handle h3, h4, h5, h6 but a link next to them looks odd
    const titles = document.querySelectorAll(".markdown-body h1, .markdown-body h2")

    for (const title of titles) {
        title.classList.add("markdown-heading")

        const content = title.textContent
        const label = '{{ T "arias.heading_link" "{title}" }}'.replace("{title}", content)
        const inner = `<span class="heading-element">${escape(content)}</span><a class="anchor" href="#${escape(title.id)}" aria-label="${escape(label)}">{{ strings.Replace ("/static/primer/link-16.svg" | readFile) "\n" "" }}</a>`

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
