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
    const titles = document.querySelectorAll(".markdown-body h1, .markdown-body h2") // Note: could handle h3, h4, h5, h6 but it's kinda weird a link by their side
    for (let i = 0; i < titles.length; i++) {
        const title = titles[i]
        title.classList.add("markdown-heading")

        const content = title.textContent
        const inner = `<span class="heading-element">${escape(content)}</span><a class="anchor" href="#${escape(title.id)}">{{ strings.Replace ("/static/primer/link-16.svg" | readFile) "\n" "" }}</a>`

        title.innerHTML = sanitize(inner)
    }
})
