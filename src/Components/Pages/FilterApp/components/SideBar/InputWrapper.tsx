import React from 'react'
import { inputArrayTypes } from '../../products'
import { Input } from './Input'



export const InputWrapper:React.FC<inputArrayTypes> = ({content,id,type}) => {
  return (
    <div className="border-b-2 p-2 rounded-md bg-gray-300 mb-4 flex flex-col">
        {content.map(item => (
            <Input key={item} id={id} type={type} content={item} />
        ))}
    </div>
  )
}
