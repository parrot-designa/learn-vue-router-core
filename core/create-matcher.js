import { createRouteMap } from "./create-route-map.js";

export function createMatcher(
    routes,
    router
){
    const { pathList, pathMap, nameMap } = createRouteMap(routes);

    function match(
        raw,
        currentRoute,
        redirectedFrom
    ){
        
    }

    return {
        match:()=>{}
    }
}