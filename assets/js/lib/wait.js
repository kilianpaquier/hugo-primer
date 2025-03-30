/**
 * wait waits for an element before resolving a promise.
 *
 * @see https://stackoverflow.com/questions/34863788/how-to-check-if-an-element-has-been-loaded-on-a-page-before-running-a-script
 *
 * @param {string} selector is the selector of the element to wait for
 * @param {Integer} timeout is the timeout before stopping active wait on element
 *
 * @returns {Promise<any>} Promise resolved or rejected once timeout is atteigned or selector is loaded
 */
const wait = (selector, timeout) => {
    return new Promise((resolve, reject) => {
        let timer = 0

        const el = document.querySelector(selector)
        if (el) {
            return resolve(el)
        }

        const observer = new MutationObserver(() => {
            const el = document.querySelector(selector)
            if (el) {
                observer.disconnect()
                clearTimeout(timer)
                return resolve(el)
            }
        })
        observer.observe(document.querySelector("html"), {
            childList: true,
            subtree: true
        })

        if (timeout) {
            timer = setTimeout(() => { observer.disconnect(); reject() }, timeout);
        }
    })
}

export default wait
