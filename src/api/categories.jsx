import Axios from "../utils/axios";
import Toast from "../utils/Toast";

const getAllUserCategory = async (query) => {
    return new Promise(function (resolve, reject) {
        Axios.get(`/admin/category?${query}`,).then((res) => {
            if (!res.data.success) {
                Toast({
                    message: res.data.message,
                    type: 'error'
                });
                reject({
                    data: res.data,
                    other: res,
                    success: false
                });
            };
            resolve({
                data: res.data,
                other: res,
                success: true
            });
        }).catch((err) => {
            if (err.response?.data) {
                Toast({
                    message: `Error from Get all Category` ?? err.response.data.message,
                    type: 'error'
                });
            };
            reject({
                data: err.response?.data,
                other: err,
                success: false
            });
        })
    })
};
export {
    getAllUserCategory
}