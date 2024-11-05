import { UploadFile } from "antd";

export interface SortedImageProps {
    item: UploadFile,
    deleteHandler: Function
}

export interface ImageLoaderProps {
    files: UploadFile[]
    onChange?: Function
}
