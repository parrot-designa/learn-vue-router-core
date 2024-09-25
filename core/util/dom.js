/**
 * 这段代码定义了一个常量 inBrowser，其值是一个布尔表达式 typeof window !== 'undefined' 的结果。
 * 这个表达式的目的是检测当前的 JavaScript 运行环境是否拥有 window 对象。
 * window 对象是浏览器环境中的全局对象，因此这个表达式可以用来判断代码是在浏览器中运行（通常为客户端 JavaScript），还是在非浏览器环境中运行（比如 Node.js 环境，或者是服务端渲染的场景）。
 */
export const inBrowser = typeof window !== 'undefined';