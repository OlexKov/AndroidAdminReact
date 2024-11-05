import { useNavigate, useSearchParams } from "react-router-dom";
import { useAddProductMutation, useGetAllProductsQuery } from "../../../../services/productService";
import { PageHeader } from "../../../page-header"
import { SkinOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { Button, Form, Input, InputNumber, message, Select, Spin, UploadFile } from "antd";
import { IProduct } from "../../../../models/product/IProduct";
import { useGetAllCategoriesQuery } from "../../../../services/categoryService";
import { IProductCreationModel } from "../../../../models/product/IProductCreationModel";
import ImageUpload from "../../../common-components/ImageUpload";

export const AddEditProduct: React.FC = () => {
    const { data: products, refetch } = useGetAllProductsQuery();
    const { data: categories } = useGetAllCategoriesQuery();
    const [searchParams] = useSearchParams();
    const [files, setFiles] = useState<UploadFile[]>([]);
    const [product, setProduct] = useState<IProduct>();
    const [publishing, setPublishing] = useState<boolean>(false)
    const [form] = Form.useForm();
    const [addProduct] = useAddProductMutation();
    const navigate = useNavigate();

    useEffect(() => {
        const id = Number(searchParams.get("id"))
        if (id) {
            setProduct(products?.filter(x => x.id === id)[0])
        }
    }, [])

    const onFinish = async (productData: IProductCreationModel) => {
        setPublishing(true);
        console.log(productData)
        if (!product) {
            try {
                await addProduct(productData).unwrap();
                message.success("Продукт успішно збережений");
                refetch();
                navigate(-1);
            }
            catch (error: any) {
                message.error("Помилка при збереженні категорії");
            }
        }
        setPublishing(false);
    }
    return (
        <div className="m-6 flex-grow  text-center ">
            <PageHeader
                title={product ? "Редагування продукту" : 'Новий продукт'}
                icon={<SkinOutlined className="text-2xl" />}
            />
            <div className="bg-white p-5">
                <div className=' w-10/12 mx-auto flex flex-col items-start'>
                    <Form
                        form={form}
                        layout='vertical'
                        initialValues={{
                            name: product ? product.name : undefined,
                            price: product ? product.price : undefined,
                            files: files,
                            categoryId: product ? product.categoryId : undefined
                        }}
                        onFinish={onFinish}
                        className='w-full my-4 text-start' >
                        <Form.Item
                            name="name"
                            label={<h6>Назва</h6>}
                            hasFeedback
                            rules={[
                                {
                                    pattern: RegExp('^[A-Z А-Я].*'),
                                    message: "Назва повинна з великої букви"
                                },
                                {
                                    required: true,
                                    message: "Не забудьте заповнити назву"
                                },
                                {
                                    min: 4,
                                    message: "Введіть щонайменше 4 символи"
                                },
                            ]}
                        >
                            <Input size='large' className='p-2 no-border no-border-container' placeholder="Наприклад,iPhone 11 з гарантією" showCount minLength={4} maxLength={500} />
                        </Form.Item>
                        <div className='w-full flex gap-4 justify-between '>
                            <Form.Item
                                name='price'
                                label="Ціна"
                                className='flex-1'
                                rules={[
                                    {
                                        required: true,
                                        message: "Не забудьте заповнити ціну"
                                    }
                                ]}>
                                <InputNumber className="w-full" addonAfter="грн." size='large' />
                            </Form.Item>

                            <Form.Item
                                name="categoryId"
                                label="Категорія"
                                className=' flex-1'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Оберіть категорію'
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Категорія"
                                    allowClear
                                    size='large'
                                    options={categories?.map(x => ({ label: x.name, value: x.id }))}
                                />
                            </Form.Item>
                        </div>
                        <Form.Item
                            name='images'
                            label="Фото"
                            rules={[
                                {
                                    required: true,
                                    message: 'Оберіть як мінімум одине фото'
                                },
                            ]}>
                            <ImageUpload files={files} onChange={setFiles} />
                        </Form.Item>

                        <div className='flex justify-end'>
                            <Button loading={publishing} size='large' htmlType="submit">
                                Зберегти
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>)
}