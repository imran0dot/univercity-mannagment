import { NextFunction,Request, Response } from "express"
import sendResponse from "../utils/sendResponse"

const global_error_handler = ( err: any,  req: Request, res: Response, next: NextFunction) => {
     return sendResponse(res, {
        success: false,
        data: '',
        message: err.message as string | 'something went wrong!',
        statusCode: 500,
     });

};

export default global_error_handler;