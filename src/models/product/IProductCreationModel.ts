import { UploadFile } from "antd";

export interface IProductCreationModel{
    id:number
    name:string,
    price:number,
    categoryId:number,
    files:UploadFile[],
}