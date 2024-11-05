import { Images } from '../../../constants/images'
import { BellOutlined, DownOutlined, LogoutOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import './Header.css'
import { Avatar, Badge, Dropdown, Image, MenuProps } from 'antd'
import { Link } from 'react-router-dom';
export const Header: React.FC = () => {
    const items: MenuProps['items'] = [
        {
            icon:<UserOutlined />,
            label: <Link to={'/userprofile'}>Профіль</Link>,
            key: '0',
        },
        {
            icon:<SettingOutlined/>,
            label: <Link to={'/usersettings'}>Налаштування</Link>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            icon:<LogoutOutlined />,
            label: 'Вийти',
            key: '3',
            onClick: () => logout()
        },
    ];

    const logout =()=>{
        console.log('LogOut')
    }
    return (
        <div className='h-[60px] bg-header sticky top-0 items-center flex-shrink-0 flex justify-between z-50'  >
            <div className='flex gap-6 items-center'>
                <Avatar  className='ml-3' size={46} src={Images.adminPanelImage} />
                <span>Адмінпанель</span>
            </div>
            <div className='flex gap-7 h-full'>
                <div className='flex gap-5 flex-shrink-0 items-center'>
                    <Badge count={2} size='small' >
                        <BellOutlined className='text-xl text-white animate-pulse' />
                    </Badge>
                    <Badge count={4} size='small'>
                        <MailOutlined className='text-xl text-white animate-wiggle' />
                    </Badge>
                </div>
                <Dropdown menu={{ items }} trigger={['click']} className='w-[180px] cursor-pointer  flex-shrink-0 bg-orange-500 flex gap-2 justify-center items-center'>
                    <div>
                        <Avatar className=" flex-shrink-0" size={40} src={Images.noImage} />
                        <span className='flex-shrink-0  text-base text-nowrap'>Ivan Sapun</span>
                        <DownOutlined />
                    </div>
                </Dropdown>

            </div>
        </div>
    )
}