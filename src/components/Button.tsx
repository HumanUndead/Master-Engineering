import React from 'react'

interface ButtonProps {
    text: string,
    textColor:string,
    backgroundColor: string,
    Icon?: React.ElementType,
    border?:string,
}   

const Button = ({textColor, backgroundColor,Icon,text,border}:ButtonProps) => {
    return (
        <div className={`${textColor} ${backgroundColor} ${border} flex justify-center items-center gap-4 py-2 px-4  md:py-3 md:px-5`}>
            {Icon && <Icon className="w-6 h-6"/>}
            {text}
        </div>
    )
}

export default Button