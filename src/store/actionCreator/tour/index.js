import tourType from "../../actionType/tour"
export function changeTourList({tourHeard,tourList}) {
    return {
        type:tourType.CHANGE_TOURLIST,
        payload:{
            tourHeard,
            tourList
        }
    }
}