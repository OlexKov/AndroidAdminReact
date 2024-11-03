import { PageHeader } from "../../page-header"
import { PlusOutlined, SkinOutlined } from '@ant-design/icons';

export const ProductTable: React.FC = () => {
    const addProduct = () => {

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

                <span className="text-black">Продукти</span>
            </div>

        </div>)
}