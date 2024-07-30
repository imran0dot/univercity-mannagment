import { Request, Response } from "express"
import sendResponse from "../utils/sendResponse"

const not_found_handler = (req: Request, res: Response) => {
    sendResponse(res, {
        success: false,
        data: '',
        message: 'no route found',
        statusCode: 404,
    })
};

export default not_found_handler;