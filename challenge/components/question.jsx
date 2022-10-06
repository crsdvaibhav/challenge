import { useState } from "react"

export default function Question(props){

    const [isActive, setIsActive] = useState(false)

    return(
        <div className="border-b-[2px] flex flex-col border-gray-200 sm:mr-8 sm:ml-0 mx-4 text-[14px] sm:w-4/5">
            <div className="flex justify-between items-center overflow-hidden">
                <div className={isActive ? "py-2 font-bold" : "py-2"}>{props.question}</div>
                <div className="py-2"><button onClick={()=>setIsActive(!isActive)}><img src="/images/icon-arrow-down.svg" className={isActive ? "h-2 rotate-180" : "h-2"}></img></button></div>
            </div>
            {isActive ? <div className="pb-2"> 
                {props.ans}
            </div> : <></>}
        </div>
    )
}