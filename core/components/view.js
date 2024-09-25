export default {
    name:'RouterView',
    functional: true,
    props: {
        name: {
          type: String,
          default: 'default'
        }
    },
    render (_, { props, children, parent, data }) {
        data.routerView = true

        const h = parent.$createElement
        const name = props.name
        const route = parent.$route
        const cache = parent._routerViewCache || (parent._routerViewCache = {})

        return h(component, data, children)
    }
}