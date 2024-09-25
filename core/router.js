import { HTML5History } from "./history/html5.js";

export default class VueRouter{

    // 路由模式
    mode;
    // history对象
    history;

    constructor(options = {}){
        let mode = options.mode || 'hash';

        this.mode = mode;

        switch(mode){
            case 'history':
                // this.history = new HTML5History(this, options.base)
                break;
            case 'hash':
                // 在路由上增加 hash 的逻辑
                // xxxxxx
                break
            default:
                throw new Error("请指定路由模式")
        }
    }
}

// export function getHash () {
//     let href = window.location.href
//     const index = href.indexOf('#')
//     // empty path
//     if (index < 0) return ''
  
//     href = href.slice(index + 1)
  
//     return href
// }

// VueRouter.install = install;