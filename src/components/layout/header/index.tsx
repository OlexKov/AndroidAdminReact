import { Images } from '../../../constants/images'
import './Header.css'
import { Image } from 'antd'
export const Header: React.FC = () => {
    return (
        <div className='h-[60px] bg-header sticky top-0 items-center flex-shrink-0 flex justify-between'  >
            <div className='flex gap-6'>
                <Image className='ml-3' width={46} src={Images.adminPanelImage} />
                <div className='flex flex-col'>
                    <span>Панель</span>
                    <span>адміністратора</span>
                </div>
            </div>

        </div>
    )
}