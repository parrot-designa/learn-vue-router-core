import { inBrowser } from "../util/dom.js";

export class History {
    router
    base
    constructor(router,base){
        this.router = router
        this.base = normalizeBase(base)
    }
}

function normalizeBase (base) {
    // 1. 如果不存在 base
    if (!base) {
      if (inBrowser) {
        // respect <base> tag
        // 1.1 如果在浏览器环境从 html的 base标签中获取 href 
        const baseEl = document.querySelector('base')
        base = (baseEl && baseEl.getAttribute('href')) || '/'
        // strip full URL origin
        // 1.1.1 从基础路径中移除协议头（http:// 或 https://）以及域名部分，保留路径部分
        base = base.replace(/^https?:\/\/[^\/]+/, '')
      } else {
        // 1.2 如果不在浏览器 直接将基础路径设为‘/’
        base = '/'
      }
    }
    // 2. 规范化路径格式：检查路径是否以斜杠开头，如果不是，则添加一个斜杠。
    if (base.charAt(0) !== '/') {
      base = '/' + base
    }
    // 3. 规范化路径格式 移除路径末尾可能存在的斜杠
    // remove trailing slash
    return base.replace(/\/$/, '')
}