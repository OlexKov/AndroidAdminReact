

import { createApi } from '@reduxjs/toolkit/query/react'
import { IProduct } from "../models/product/IProduct"
import { IProductCreationModel } from "../models/product/IProductCreationModel"
import { createBaseQuery } from "../utils/createBaseQuery"
import { generateCreateProductFormData} from '../utils/formDataGenerator'



export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: createBaseQuery('Products'),
    tagTypes: ['Product'],

    endpoints: (builder) => ({
        getAllProducts: builder.query<IProduct[], void>({
            query: () => {
                return {
                    url: '',
                    method: 'GET',
                }
            },
        }),
        getProductById: builder.query<IProduct, string>({
            query: (id:string) => {
                return {
                    url: `${id}`,
                    method: 'GET',
                }
            },
        }),
        addProduct: builder.mutation<IProduct, IProductCreationModel>({
            query: (productForm) => {
                const formData = generateCreateProductFormData(productForm)
                return {
                url: '',
                method: 'POST',
                body: formData,
            }},
        }),
        updateProduct: builder.mutation<IProduct, IProductCreationModel>({
            query: (productForm) => {
                const formData = generateCreateProductFormData(productForm)
                return {
                url: '',
                method: 'PUT',
                body: formData,
            }},
        }),

        deleteProduct: builder.mutation<void, string>({
            query: (id) => ({
                url: `${id}`,
                method: 'DELETE',
            }),
        }),


    }),
})

export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productApi;

