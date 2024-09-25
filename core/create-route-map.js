export function createRouteMap(
    routes,
    oldPathList,
    oldPathMap,
    oldNameMap,
    parentRoute
){
    const pathList = oldPathList || [];
    const pathMap = oldPathMap || Object.create(null)

    return {
        pathList,
        pathMap
    }
}