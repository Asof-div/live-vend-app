import * as API from "../../utils/api";
import * as actions from "./store/actions";

export function getFeaturedProducts(params) {
    return dispatch =>
        new Promise((resolve, reject) => {
            const url = "product/featured/list" ;
            API.getReq(url,
                (res => {
                    dispatch(actions.featuredProducts(res));
                    resolve(res)
                }),
                (err => {
                    return reject(err);
                }));
        });
}

export function getProductCategoryList(params) {
    return dispatch =>
        new Promise((resolve, reject) => {
            const url = "category" ;
            API.getReq(url,
                (res => {
                    dispatch(actions.setCategoryList(res));
                    resolve(res)
                }),
                (err => {
                    return reject(err);
                }));
        });
}
