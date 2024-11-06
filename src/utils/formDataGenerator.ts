import { ICategoryCreationModel } from "../models/category/ICategoryCreationModel";
import { IProductCreationModel } from "../models/product/IProductCreationModel";
import { IProductEditModel } from "../models/product/IProductditModel";

export const generateCreateProductFormData = (productModel: IProductCreationModel): FormData => {
    const formData = new FormData();
    if (productModel.images && productModel.images.length > 0) {
        productModel.images.forEach(file => {
            formData.append('images[]',  file.originFileObj as Blob)
        })
    }
    formData.append('name', productModel.name)
    formData.append('price', productModel.price.toString())
    formData.append('categoryId', productModel.categoryId.toString());
    return formData;
}

export const generateEditProductFormData = (productModel: IProductEditModel): FormData => {
    const formData = new FormData();
    if (productModel.newImages && productModel.newImages.length > 0) {
        productModel.newImages.forEach(file => {
            formData.append('newImages[]',  file.originFileObj as Blob);
        })
    }
    if (productModel.removeImages && productModel.removeImages.length > 0) {
        productModel.removeImages.forEach(image => {
            formData.append('RemoveImages', image);
        })
    }
    formData.append('Id', productModel.id.toString())
    formData.append('Name', productModel.name)
    formData.append('Price', productModel.price.toString())
    formData.append('CategoryId', productModel.categoryId.toString());
    return formData;
}

export const generateCategoryFormData = (categoryModel: ICategoryCreationModel):FormData => {
    const formData = new FormData();
    if (categoryModel.image) {
        formData.append('imageFile',  categoryModel.image.originFileObj as Blob);
    }
    formData.append('name', categoryModel.name)
    formData.append('description', categoryModel.description || '')
    formData.append('id', categoryModel.id ? `${categoryModel.id}` : "0");
    return formData;
}