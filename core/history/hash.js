export class HashHistory {
    constructor(router){
        ensureSlash()
    }
}
 
export function getHash () {
    let href = window.location.href
    const index = href.indexOf('#')
    // empty path
    if (index < 0) return ''
  
    href = href.slice(index + 1)
  
    return href
}

