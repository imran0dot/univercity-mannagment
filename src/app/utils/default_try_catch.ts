const default_try_catch = (callBack: () => void): void => {
    try {
        return callBack();
    } catch (error) {
        console.log(error);
    }
};

export default default_try_catch;