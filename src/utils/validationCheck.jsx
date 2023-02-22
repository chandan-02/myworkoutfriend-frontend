import Toast from "./Toast";

const validationCheck = (data) => {
    for (let key in data) {
      if (!data[key]) {
        // return { status: false, errorAt: key };
        Toast({
            message: `Please enter ${key}` ?? err.response.data.message,
            type: 'error'
        });
        return {status : false}
      }
    }
    return { status: true };
  };

  export { validationCheck };