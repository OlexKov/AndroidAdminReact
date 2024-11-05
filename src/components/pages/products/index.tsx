import { Table, Image, Avatar } from "antd";
import { useGetAllCategoriesQuery } from "../../../services/categoryService";
import { useGetAllProductsQuery } from "../../../services/productService";
import { PageHeader } from "../../page-header"
import { PlusOutlined, SkinOutlined } from '@ant-design/icons';
import { Images } from "../../../constants/images";
import { APP_ENV } from "../../../constants/env";
import { useNavigate } from "react-router-dom";

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
        render: (_text: string, record: TableCategoryData) =>
            <Image.PreviewGroup
                items={record.images.map(x => APP_ENV.IMAGES_800_URL + x)}>
                <Image width={100} src={record.images[0] ? APP_ENV.IMAGES_200_URL + record.images[0] : Images.noImage} />,
            </Image.PreviewGroup>,
        width: '120px'
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
        render: (name: string, record: TableCategoryData) =>
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
        render: (price: string) =><span>{price} грн.</span>
            
    },

];

interface TableCategoryData {
    id: number,
    name: string,
    price: number,
    category: string,
    images: string[],
    categoryImage?: string
}

export const ProductTable: React.FC = () => {
    const { data: products} = useGetAllProductsQuery();
    const { data: categories } = useGetAllCategoriesQuery();
    const navigate = useNavigate();

    const addProduct = () => {
        navigate('/create-edit')
    }
    return (
        <div className=" m-6 flex-grow  text-center ">
            <PageHeader
                title="Продукти"
                tooltipMessage="Додати продукт"
                icon={<SkinOutlined className="text-2xl" />}
                buttonIcon={<PlusOutlined className="text-white text-2xl" />}
                onClick={addProduct} />
            <div className="bg-white p-5">

                <Table<TableCategoryData>
                    className="pt-3 "
                    columns={columns}
                    dataSource={products?.map<TableCategoryData>(x => ({
                        id: x.id,
                        name: x.name,
                        price: x.price,
                        category: categories?.filter(z => z.id === x.categoryId)[0].name || 'Error !!!',
                        images: x.images,
                        categoryImage: categories?.filter(z => z.id === x.categoryId)[0].image
                    }))}
                />
            </div>

        </div>)
}