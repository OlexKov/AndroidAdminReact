import { UploadFile } from "antd";

export interface IProductCreationModel{
    name:string,
    price:number,
    categoryId:number,
    images?:UploadFile[],
}