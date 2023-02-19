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

const addNewCategory = async (category) => {
    return new Promise(function (resolve, reject) {
        Axios.post("/admin/category", category).then((res) => {
            Toast({
                message: 'Category Added!',
                type: 'success'
            });
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
                    message: `Error Adding Category` ?? err.response.data.message,
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
    getAllUserCategory,
    addNewCategory,
}