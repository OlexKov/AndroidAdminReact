import { PageHeader } from "../../page-header"
import { PlusOutlined, ProfileOutlined } from '@ant-design/icons';

export const CategoryTable: React.FC = () => {
    const addCategory = () => {

    }
    return (
        <div className="m-6 flex-grow  text-center ">
            <PageHeader
                title="Категорії"
                tooltipMessage="Додати категорію"
                icon={<ProfileOutlined className="text-2xl"  />}
                buttonIcon={<PlusOutlined className="text-white text-2xl" />}
                onClick={addCategory} />
            <div className="bg-white p-5">

                <span className="text-black">Категорії</span>
            </div>

        </div>)
}