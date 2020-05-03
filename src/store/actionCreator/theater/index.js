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