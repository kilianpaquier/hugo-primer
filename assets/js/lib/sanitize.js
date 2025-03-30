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

const sanitize = input => DOMPurify.sanitize(input)

export { escape, sanitize }
