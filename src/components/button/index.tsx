interface ButtonTypes{
    value: string
    variant: "filled" | "bordered"
}

export default function Button(props: ButtonTypes){
    return(
        <>
        {props.variant == "filled" &&
            <button 
                className="
                    px-[2rem]
                    py-[.8rem]
                    bg-blue-600
                    text-white
                    rounded
                "
            >{props.value}</button>
        }
        {props.variant == "bordered" &&
            <button 
                className="
                    px-[2rem]
                    py-[.8rem]
                    border-[1px]
                    border-blue-600
                    text-blue-600
                    rounded
                "
            >{props.value}</button>
        }
        </>
    )
}