import { Avatar, Divider } from "antd"
import Sider from "antd/es/layout/Sider"
import { SideBarMenu } from "../menu"
import { useState } from "react";
import './Sidebar.css'
import { Images } from "../../../constants/images";

export const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider width={288} theme='dark' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div className="flex flex-col">
        <div className={` flex p-3 gap-5 ${collapsed ? ' justify-center' : ''} items-center overflow-hidden user-container`}>
          <Avatar className=" flex-shrink-0" size={collapsed ? 46 : 84} src={Images.noImage} />
          {!collapsed &&
            <div className="flex flex-col gap-1">
              <span className='flex-shrink-0 font-bold text-lg text-nowrap'>Ivan Sapun</span>
              <span className=" animate-pulse text-green-400">Online</span>
            </div>}
        </div>
        {!collapsed &&
          <>
            <h3 className="font-bold text-xl py-4 pl-[30px]">Основне меню</h3>
            <Divider type="horizontal" variant="solid" className="border-red-400 m-0 p-0 mb-7" />
          </>}
      </div>
      <SideBarMenu />
    </Sider>)
}