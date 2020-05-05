import theaterType from "../../actionType/theater"
export function changeCategory(payload) {
    return {
        type:theaterType.CHANGE_CATEGORY,
        payload
    }
}
export function changeDealiList(payload) {
    return {
        type:theaterType.CHANGE_DETAIL,
        payload
    }
}
export function changeTheatreid({theatre,venue}) {
    return {
        type:theaterType.CHANGE_THEATRE_ID,
        payload:{
            venue:venue,
            theatre:theatre
        }
    }
}