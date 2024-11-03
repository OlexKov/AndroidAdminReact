import { ReactNode } from "react"
import './PageHeader.css'

interface PageHeaderProps {
    title?: string,
    icon?: ReactNode,
    onClick?: Function,
    buttonIcon?: ReactNode,
}
export const PageHeader: React.FC<PageHeaderProps> = ({ title, icon, onClick ,buttonIcon}) => {
    const onButtonClick = ()=>{
        if(onClick){
            onClick();
        }
    }
    return (
        <div className=" flex gap-5 w-full items-center ph-bg h-[70px] rounded-t-md pl-10 relative">
            {icon}
            <span className="text-xl">{title}</span>
            {onClick &&
                <div style={{right:'10%'}} 
                className="h-[45px] w-[45px] flex items-center justify-center cursor-pointer rounded-full bg-green-500 absolute top-12 "
                onClick={onButtonClick}>
                     {buttonIcon}
                </div>}
        </div>)
}