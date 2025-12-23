//import important assets/modules
import{z}from "zod";
import{Request,Response,NextFunction}from "express";
import { AppError } from "../errors/app.error";
// Schema for adding a book
export const addBookSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
  author: z.string().min(1, 'Author is required').max(50, 'Author name too long'),
  publish_Date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format'),
});
// Schema for updating a book
export const updateBookSchema = z.object({
  title: z.string().min(1).max(100).optional(),
  author: z.string().min(1).max(50).optional(),
  publish_Date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
}).refine(data => Object.keys(data).length > 0, 'At least one field must be provided');
//Middleware to validate add book and update book reqs
export const validate=(schema:z.ZodSchema)=>{
    return(req:Request,res:Response,next:NextFunction)=>{
        try{
            schema.parse(req.body);
            next();
        }catch(err){
            if(err instanceof z.ZodError){
                const messages = err.issues.map(issue => issue.message);
                next(new AppError(400, `Validation failed: ${messages.join(', ')}`));
            }else{
                next(new AppError(400,"Invalid request data"));
            }
        }
    }
}