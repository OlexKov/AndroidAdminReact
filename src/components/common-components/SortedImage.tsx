import React from 'react'
import {  Image } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import { SortedImageProps } from '../../models/Props';


const SortedImage: React.FC<SortedImageProps> = ({ item, deleteHandler }) => {
    return (
        <div className='border-[1px] rounded-md p-1 relative'>
            <DeleteFilled onClick={() => deleteHandler(item.uid)} className='text-xl text-red-700 absolute top-[10%] z-50 left-[5%]' />
            <Image
                className=' rounded-md object-cover aspect-video'
                alt={item.uid}
                src={item.url || (item.preview as string)}
                preview={true}
                width={250}
            />
        </div>
    )
}

export default SortedImage