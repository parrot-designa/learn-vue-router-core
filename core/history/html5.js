import { cleanPath } from "../util/path.js";
import { History } from "./base.js";

export class HTML5History extends History {
    _startLocation

    constructor(router,base){
        super(router, base)
        this._startLocation = getLocation(this.base)
    }
}

/**
 * 目的是为了从当前浏览器窗口的位置对象（window.location）中获取路径名，并根据提供的基准路径（base 参数）来调整返回的路径字符串。
 * @param {*} base 
 * @returns 
 */
export function getLocation(base){
    let path = window.location.pathname
    const pathLowerCase = path.toLowerCase()
    const baseLowerCase = base.toLowerCase()
    // 检查是否有提供基准路径，并且当前路径是否与基准路径完全匹配
    if (base && ((pathLowerCase === baseLowerCase) ||
        (pathLowerCase.indexOf(cleanPath(baseLowerCase + '/')) === 0))) {
        path = path.slice(base.length)
    }
    return (path || '/') + window.location.search + window.location.hash
}