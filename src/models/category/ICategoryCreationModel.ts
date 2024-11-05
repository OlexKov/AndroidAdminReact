import { UploadFile } from "antd";

export interface ICategoryCreationModel{
    id:string | string[],
    name:string,
    description:string | undefined,
    image:UploadFile | undefined
}