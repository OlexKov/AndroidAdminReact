

import { createApi } from '@reduxjs/toolkit/query/react'
import { IProduct } from "../models/product/IProduct"
import { IProductCreationModel } from "../models/product/IProductCreationModel"
import { createBaseQuery } from "../utils/createBaseQuery"
import { generateCreateProductFormData, generateEditProductFormData } from '../utils/formDataGenerator'
import { IProductEditModel } from '../models/product/IProductditModel'


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
                // headers: {
                //     'Content-Type': 'multipart/form-data'
                // }
            }},
        }),
        updateProduct: builder.mutation<IProduct, IProductEditModel>({
            query: (productForm) => {
                const formData = generateEditProductFormData(productForm)
                return {
                url: '',
                method: 'PUT',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }

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

