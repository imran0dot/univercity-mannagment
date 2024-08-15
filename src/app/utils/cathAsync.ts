import {Request, Response, NextFunction, RequestHandler } from "express";

const cathAsync = (callBack: RequestHandler) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(callBack(req, res, next)).catch(err => next(err));
    }
};

export default cathAsync;