export function storeString(key, value) {
    window.localStorage.setItem(key, value)
}

export function loadString(key) {
    return window.localStorage.getItem(key)
}
