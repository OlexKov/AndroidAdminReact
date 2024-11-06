import { Table, Image, Avatar, Spin, message } from "antd";
import { useGetAllCategoriesQuery } from "../../../services/categoryService";
import { useDeleteProductMutation, useGetAllProductsQuery } from "../../../services/productService";
import { PageHeader } from "../../page-header"
import { DeleteFilled, EditFilled, PlusOutlined, SkinOutlined } from '@ant-design/icons';
import { Images } from "../../../constants/images";
import { APP_ENV } from "../../../constants/env";
import { useNavigate } from "react-router-dom";
import { DeleteDialog } from "../../common-components/DeleteDialog";
import { useState } from "react";



interface TableProductData {
    id: number,
    name: string,
    price: number,
    category: string,
    images: string[],
    categoryImage?: string
}

export const ProductTable: React.FC = () => {
    const { data: products, isLoading: isProductLoading, refetch } = useGetAllProductsQuery();
    const { data: categories, isLoading: isCategorytLoading } = useGetAllCategoriesQuery();
    const navigate = useNavigate();
    const [deleteProduct] = useDeleteProductMutation();
    const [dialOpen,setDialOpen] = useState<boolean>(false)
    const [delProduct,setdelProduct] = useState<TableProductData>()
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            width: '40px'
        },
        {
            title: 'Фото',
            dataIndex: 'image',
            key: 'image',
            render: (_text: string, record: TableProductData) =>
                <div className="flex  items-center">
                    <Image.PreviewGroup
                        items={record.images.map(x => APP_ENV.IMAGES_800_URL + x)}>
                        <Image className="self-center" width={100} src={record.images[0] ? APP_ENV.IMAGES_200_URL + record.images[0] : Images.noImage} />,
                    </Image.PreviewGroup>
                </div>
            ,
            width: '120px',
        },
        {
            title: 'Назва',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Категорія',
            dataIndex: 'category',
            key: 'category',
            render: (name: string, record: TableProductData) =>
                <div className="flex gap-4 items-center">
                    <Avatar size={48} src={record.categoryImage ? APP_ENV.IMAGES_200_URL + record.categoryImage : Images.noImage} />
                    <span>{name}</span>
                </div>
        },
        {
            title: 'Ціна',
            dataIndex: 'price',
            key: 'price',
            width: '120px',
            render: (price: string) => <span>{price} грн.</span>

        },

        {
            key: 'actions',
            width: '150px',
            render: (_text: string, record: TableProductData) =>
                <div className="flex justify-around">
                    <EditFilled onClick={() => navigate(`/create-edit?id=${record.id}`)} className='text-2xl text-green-700' />
                    <DeleteFilled onClick={() => {setdelProduct(record),setDialOpen(true)}} className='text-2xl text-red-700' />
                </div>

        },

    ];

    const deleteHandler = async () => {
        try {
            await deleteProduct(delProduct?.id.toString() || '').unwrap()
            message.success("Продукт успішно видалений");
            refetch();
        }
        catch (error: any) {
            message.error("Помилка при збереженні категорії");
        }
        setDialOpen(false)
    }

    return (
        <div className=" m-6 flex-grow  text-center ">
            <DeleteDialog
                title="Ви впевненні ?"
                description={`Видалення продукту "${delProduct?.name}"`}
                isOpen={dialOpen}
                onCancel={()=>setDialOpen(false)}
                onSubmit={deleteHandler}
            />
            <PageHeader
                title="Продукти"
                tooltipMessage="Додати продукт"
                icon={<SkinOutlined className="text-2xl" />}
                buttonIcon={<PlusOutlined className="text-white text-2xl" />}
                onClick={() => navigate('/create-edit')} />
            <div className="bg-white p-5">
                <Spin spinning={isCategorytLoading || isProductLoading} size='large' fullscreen />
                {!isCategorytLoading && !isProductLoading &&
                    <Table<TableProductData>
                        className="pt-3 "
                        columns={columns}
                        dataSource={products?.map<TableProductData>(x => ({
                            id: x.id,
                            name: x.name,
                            price: x.price,
                            category: categories?.filter(z => z.id === x.categoryId)[0].name || 'Error !!!',
                            images: x.images,
                            categoryImage: categories?.filter(z => z.id === x.categoryId)[0].image
                        }))}
                    />}
            </div>
        </div>)
}