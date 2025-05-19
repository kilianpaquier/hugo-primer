/**
 * wait waits for an element with a specific selector before resolving a promise.
 *
 * @see https://stackoverflow.com/questions/34863788/how-to-check-if-an-element-has-been-loaded-on-a-page-before-running-a-script
 *
 * @param {string} selector is the selector of the element to wait for
 * @param {number} timeout is the timeout before stopping active wait on element
 *
 * @returns {Promise<HTMLElement>} Promise resolved or rejected once timeout is atteigned or selector is loaded
 */
const wait = (selector, timeout) => {
    return new Promise((resolve, reject) => {
        if (!selector) {
            return reject()
        }

        const query = function () {
            if (selector.startsWith("#")) {
                return () => document.getElementById(selector.substring(1)) // optimize search in case it's only an ID
            }
            return () => document.querySelector(selector)
        }()

        let timer = 0

        const el = query()
        if (el) {
            return resolve(el)
        }

        const observer = new MutationObserver(() => {
            const el = query()
            if (el) {
                observer.disconnect()
                clearTimeout(timer)
                return resolve(el)
            }
        })
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        })

        if (timeout) {
            timer = setTimeout(() => { observer.disconnect(); reject() }, timeout);
        }
    })
}

export default wait
