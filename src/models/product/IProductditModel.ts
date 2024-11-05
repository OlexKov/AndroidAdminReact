import { UploadFile } from "antd"

export interface IProductEditModel{
    id:number
    name:string,
    price:number,
    categoryId:number,
    newImages?:UploadFile[],
    removeImages:string[]
}