const default_try_catch = ( callBack: () => void ): any => {
    try {
        return callBack();
    } catch (error) {
        console.log(error);
    }
};

export default default_try_catch;