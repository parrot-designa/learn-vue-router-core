import View from './components/view'

export let _Vue

export function install(Vue){
    if (install.installed && _Vue === Vue) return
    install.installed = true

    _Vue = Vue

    const isDef = v => v !== undefined
    
}