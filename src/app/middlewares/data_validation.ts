import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const data_validation_schema = (schema: AnyZodObject) => {
    return async(req: Request, res: Response, next: NextFunction) => {
        // schema validation using zod 
        try{
            await schema.parseAsync({ body: req.body });
            return  next();
        }catch(err){
            next(err);
        }
    }
};

export default data_validation_schema;