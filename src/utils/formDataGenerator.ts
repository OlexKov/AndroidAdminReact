import { ICategoryCreationModel } from "../models/category/ICategoryCreationModel";
import { IProductCreationModel } from "../models/product/IProductCreationModel";


export const generateCreateProductFormData = (productModel: IProductCreationModel): FormData => {
    const formData = new FormData();
    if (productModel.files && productModel.files.length > 0) {
        productModel.files.forEach(file => {
            formData.append('images[]',  file.originFileObj as Blob)
        })
    }
    formData.append('id', productModel.id.toString())
    formData.append('name', productModel.name)
    formData.append('price', productModel.price.toString())
    formData.append('categoryId', productModel.categoryId.toString());
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