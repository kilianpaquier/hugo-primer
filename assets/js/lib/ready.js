/**
 * documentReady checks whether the current document is loading are already ready to receive instructions.
 *
 * When loading, callback is wrapped with DOMContentLoaded event. If not loading, then callback is executed directly.
 *
 * @param {() => void} callback
 */
const documentReady = callback => {
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", callback)
    } else {
        callback()
    }
}

export default documentReady
