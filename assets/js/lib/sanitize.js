/**
 * escape escapes the input to avoid security issues with it.
 *
 * @param {string} input to escape
 *
 * @returns {string} sanitized input
 */
const escape = input => {
    if (!input) return ""
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")
}

/**
 * @param {HTMLElement} node
 */
const upon = (node, data) => {
    if (data.tagName !== "a") {
        return
    }

    const target = node.getAttribute("target")
    if (!target || target === "_self") {
        return
    }

    const rel = node.getAttribute("rel")
    if (target !== "_blank" || rel !== "noopener noreferrer") {
        node.removeAttribute("rel")
        node.removeAttribute("target")
    }
}
DOMPurify.addHook('uponSanitizeElement', upon)

/**
 * sanitize sanitizes the input string to avoid any Node.innerHTML issues.
 * 
 * @param {string} input the input node(s) to sanitize
 * 
 * @returns sanitized node
 */
const sanitize = input => DOMPurify.sanitize(input, { ADD_ATTR: ["target"] })

export { escape, sanitize }
