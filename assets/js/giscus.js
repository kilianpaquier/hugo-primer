import wait from "./lib/wait"

wait("#giscus").then(() => {
    // observer a change of theme to send giscus a message indicating to change its own theme since it's in a iframe
    const html = document.documentElement
    new MutationObserver(mutations => {
        for (const mutation of mutations) {
            if (mutation.type !== "attributes" || mutation.attributeName !== "data-light-theme") {
                continue
            }
            const theme = mutation.target.getAttribute("data-light-theme")

            const iframe = document.querySelector("iframe.giscus-frame")
            iframe.contentWindow.postMessage({ giscus: { setConfig: { theme } } }, "https://giscus.app")
        }
    }).observe(html, { attributes: true })

    // initialize giscus with dynamic and predefined properties
    const attrs = {
        "data-category-id": '{{ index site.Params.hugo_primer.giscus.params "data-category-id" }}',
        "data-category": '{{ index site.Params.hugo_primer.giscus.params "data-category" }}',
        "data-emit-metadata": '{{ index site.Params.hugo_primer.giscus.params "data-emit-metadata" }}',
        "data-input-position": '{{ index site.Params.hugo_primer.giscus.params "data-input-position" }}',
        "data-loading": '{{ index site.Params.hugo_primer.giscus.params "data-loading" }}',
        "data-mapping": '{{ index site.Params.hugo_primer.giscus.params "data-mapping" }}',
        "data-reactions-enabled": '{{ index site.Params.hugo_primer.giscus.params "data-reactions-enabled" }}',
        "data-repo-id": '{{ index site.Params.hugo_primer.giscus.params "data-repo-id" }}',
        "data-repo": '{{ index site.Params.hugo_primer.giscus.params "data-repo" }}',
        "data-strict": '{{ index site.Params.hugo_primer.giscus.params "data-strict" }}',

        "data-lang": html.getAttribute("lang"),
        "data-theme": html.getAttribute("data-light-theme"),
        async: "",
        crossorigin: "anonymous",
        src: "https://giscus.app/client.js",
    }
    const script = document.createElement("script")
    Object.entries(attrs).forEach(([key, value]) => script.setAttribute(key, value))
    document.body.appendChild(script)
}).catch(console.error)
