import documentReady from "./lib/ready"
import { escape, sanitize } from "./lib/sanitize"

/**
 * A search item
 *
 * @typedef {Object} Item
 * @property {string} content
 * @property {string} date
 * @property {string} description
 * @property {string} icon
 * @property {string} permalink
 * @property {string} section
 * @property {string[]} tags
 * @property {string} title
 * @property {string} url
 */

/**
 * toItemHTML transforms the input item into a viable HTML node (or nodes) to be used in a list.
 *
 * @param {Item} item to transform
 */
const toItemHTML = item => {
    return `
    <li class="ActionListItem" role="option" aria-label="${escape(item.title)}">
        <a href="${escape(item.url ?? item.permalink)}" class="ActionListContent" aria-label="${escape(item.title)}" ${item.url ? 'target="_blank" rel="noopener noreferrer"' : ""}>
            <span class="ActionListItem-visual ActionListItem-visual--leading octicon">${item.icon}</span>
            <span class="ActionListItem-descriptionWrap">
                <span class="ActionListItem-label">${escape(item.title)}</span>
                <span class="ActionListItem-description">${escape(item.description)}</span>
            </span>
            <span class="ActionListItem-action ActionListItem-action--trailing no-wrap">{{ T "search.jump" }}</span>
        </a>
    </li>
    `
}

/**
 * section returns a built HTML search section (i.e. an Hugo section).
 *
 * @param {string} section section name
 * @param { { item: Item }[] } finds all search elements returned
 *
 * @returns the built HTML section
 */
const section = (section, finds) => {
    const li = document.createElement("li")
    li.classList.add("ActionList-sectionDivider", "p-0")
    li.role = "presentation"

    const title = document.createElement("h3")
    title.classList.add("ActionList-sectionDivider-title", "py-2")
    title.role = "presentation"
    title.textContent = escape(section)

    const ul = document.createElement("ul")
    ul.role = "presentation"
    ul.innerHTML = sanitize(finds.map(find => toItemHTML(find.item)).join(""))

    li.append(title, ul)
    return li
}

/**
 * previous returns the previous list element of current or the previous list last child in case there's no previous sibling for current.
 *
 * In case current is not defined, then the returned element is the last child of the last list to have an infinite UI loop.
 *
 * @param {HTMLLIElement|undefined} current current selected element
 * @param {HTMLUListElement} results the global results list with separated sub-lists
 *
 * @returns {HTMLLIElement} the previous element to select
 */
const previous = (current, results) => {
    // return last of all sub-lists
    const lastChild = 'li[role="option"]:last-of-type'
    const lastDivider = 'li.ActionList-sectionDivider:not(:empty):last-child'
    if (!current) {
        return results.querySelector(`${lastDivider} ${lastChild}`)
    }

    // return next if it exists and is an option
    let next = current.previousElementSibling
    if (next && next.role === "option") return next

    let divider = current.closest("li.ActionList-sectionDivider:not(:empty)").previousElementSibling // current parent
    if (!divider) return results.querySelector(`${lastDivider} ${lastChild}`) // we are at the top, let's go back to the bottom

    // get the first previous sibling with children
    while (divider.children.length === 0) {
        divider = divider.previousElementSibling
    }
    return divider.querySelector(lastChild)
}

/**
 * next returns the next list element of current or the next list first child in case there's no next sibling for current.
 *
 * In case current is not defined, then the returned element is the first child of the first list to have an infinite UI loop.
 *
 * @param {HTMLLIElement|undefined} current current selected element
 * @param {HTMLUListElement} results the global results list with separated sub-lists
 *
 * @returns {HTMLLIElement} the next element to select
 */
const next = (current, results) => {
    // return last of all sub-lists
    const firstChild = 'li[role="option"]:first-of-type'
    const firstDivider = "li.ActionList-sectionDivider:not(:empty):first-child"
    if (!current) {
        return results.querySelector(`${firstDivider} ${firstChild}`)
    }

    // return next if it exists and is an option
    let next = current.nextElementSibling
    if (next && next.role === "option") return next

    let divider = current.closest("li.ActionList-sectionDivider:not(:empty)").nextElementSibling // current parent
    if (!divider) return results.querySelector(`${firstDivider} ${firstChild}`) // we are at the top, let's go back to the bottom

    // get the first previous sibling with children
    while (divider.children.length === 0) {
        divider = divider.nextElementSibling
    }
    return divider.querySelector(firstChild)
}

/**
 * index retrieves provided path as json format.
 *
 * @param {string} path the remote path JSON file with search index
 *
 * @returns {Promise<Item[]>} items, parsed JSON of search index
 */
const remote = async path => {
    const response = await fetch(path)
    if (!response.ok) throw new Error("Failed to fetch search index")
    const data = await response.json()
    return data
}

documentReady(async () => {
    // load search index depending on current lang
    const pages = await remote(`{{ site.LanguagePrefix }}/index.json`)

    // initialize fuse
    const options = {
        includeScore: true,
        keys: [
            { name: "title", weight: 2 },
            { name: "section", weight: 1 },
            { name: "description", weight: .5 },
            { name: "tags", weight: .5 },
        ],
        shouldSort: true,
        useExtendedSearch: true,
        threshold: .2, // don't show too high fuzzy matches
    }
    const index = Fuse.createIndex(options.keys, pages)
    const fuse = new Fuse(pages, options, index)

    // retrieve search elements
    const results = document.getElementById("search-results")

    // define search wrapper with HTML after search setup
    const search = value => {
        // show spinner while loading
        results.innerHTML = sanitize(`
            <div class="d-flex flex-justify-center p-3">
                <span class="d-flex flex-items-center spinner">
                    {{ strings.Replace ("/static/spinner-16.svg" | readFile) "\n" "" }}
                    <span class="prc_VisuallyHidden_UNWQp">{{ T "arias.loading" }}</span>
                </span>
            </div>`)
        const finds = fuse.search(value)
        results.innerHTML = "" // clean results before showing new ones
        if (finds.length == 0) return

        const groups = Object.entries(Object.groupBy(finds, item => item.item.section))
            .flatMap(([k, v], index, array) => {
                if (index < array.length - 1) {
                    const sep = document.createElement("li")
                    sep.classList.add("ActionList-sectionDivider", "mx-0", "my-2")
                    sep.role = "presentation"
                    return [section(k, v), sep]
                }
                return [section(k, v)]
            })
        results.append(...groups) // add all elements at the same time to avoid progressive display issue

        // handle scrollbar space with list (must be handled after displaying all results)
        if (results.scrollHeight > results.clientHeight) {
            results.classList.add("scrollbar-space")
        } else {
            results.classList.remove("scrollbar-space")
        }
    }

    // open overlay with / and handle list selection with ArrowUp, ArrowDown and Enter
    const input = document.getElementById("search-input")
    const button = document.getElementById("search-button")
    document.addEventListener("keydown", e => {
        // open overlay on / if it's not already opened
        if (e.key === "/" && !input.checkVisibility()) {
            e.preventDefault()
            button.click()
        }
    })

    // clear input on clear click (button inside input field)
    document.getElementById("search-clear").addEventListener("click", () => {
        input.value = ""
        search("") // force refresh results and linked HTML elements
    })

    // search on input keydown with debounce
    let timeout = 0
    input.addEventListener("keydown", e => {
        // select the next or previous element from grouped lists of search results
        const current = results.querySelector('li[aria-selected="true"][role="option"]')
        if (["ArrowDown", "ArrowUp"].includes(e.key)) {
            e.preventDefault()

            let el = undefined
            if (e.key === "ArrowDown") el = next(current, results)
            if (e.key === "ArrowUp") el = previous(current, results)

            current?.removeAttribute("aria-selected")
            el?.setAttribute("aria-selected", "true")
            el?.scrollIntoView({ block: "center" })

            return
        }

        // open link of selected search result
        if (e.key === "Enter" && current) {
            e.preventDefault()
            current.firstElementChild?.click()
            return
        }

        if (e.key.length === 1 || ["Backspace", "Delete"].includes(e.key)) {
            // debounce search to avoid searching on every keydown
            clearTimeout(timeout)
            timeout = setTimeout(() => search(input.value), 600)
            return
        }
    })
})
