import Axios from "../utils/axios";
import Toast from "../utils/Toast";

const getAllExercise = async (query) => {
    return new Promise(function (resolve, reject) {
        Axios.get(`/admin/exercise?${query}`).then((res) => {
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
                    message: `Error from Get all exercise` ?? err.response.data.message,
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

const addNewExercise = async (exerciseData) => {
    return new Promise(function (resolve, reject) {
        Axios.post("/admin/exercise", exerciseData).then((res) => {
            Toast({
                message: 'Exercise Added!',
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
                    message: `Error Adding Exercise` ?? err.response.data.message,
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

// User exercise related apis
const saveExercise = async (data) => {
    return new Promise(function (resolve, reject) {
        Axios.post(`/admin/user-exercise`, data).then((res) => {
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
            Toast({
                message: "Exercise Saved!",
                type: 'success'
            });
            resolve({
                data: res.data,
                other: res,
                success: true
            });
        }).catch((err) => {
            if (err.response?.data) {
                Toast({
                    message: `Couldn't Save Exercise` ?? err.response.data.message,
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
const getAllUserExercise = async (query) => {
    return new Promise(function (resolve, reject) {
        Axios.get(`/admin/user-exercise?${query}`,).then((res) => {
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
                    message: `Couldn't Get User Report` ?? err.response.data.message,
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

const DeleteASet = async (data) => {
    return new Promise(function (resolve, reject) {
        Axios.put(`/admin/user-exercise/del`, data).then((res) => {
            Toast({
                message: 'Set Deleted!',
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
                    message: `Couldn't Delete Set` ?? err.response.data.message,
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
    getAllExercise,
    addNewExercise,
    saveExercise,
    getAllUserExercise,
    DeleteASet
}