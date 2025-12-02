import mongoose, { Document } from "mongoose";
interface UserInt extends Document {
    userName: String;
    email: String;
    password: String;
    age: Number;
    role: String;
    createdAt: Date;
}
export declare const User: mongoose.Model<UserInt, {}, {}, {}, mongoose.Document<unknown, {}, UserInt, {}, mongoose.DefaultSchemaOptions> & UserInt & Required<{
    _id: unknown;
}> & {
    __v: number;
}, mongoose.Schema<UserInt, mongoose.Model<UserInt, any, any, any, mongoose.Document<unknown, any, UserInt, any, {}> & UserInt & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, UserInt, mongoose.Document<unknown, {}, mongoose.FlatRecord<UserInt>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<UserInt> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>>;
export {};
//# sourceMappingURL=User.d.ts.map