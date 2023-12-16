import { BinaryToDecimal, DecimalToBinary } from "@/lib/converter"
import { CopyIcon } from "lucide-react"

interface TextAreaTypes{
    type: "binary" | "decimal"
    value: string | undefined
    setDecimal: React.Dispatch<React.SetStateAction<string>>
    setBinary: React.Dispatch<React.SetStateAction<string>>
    disabled?: true | false
}

export default function TextArea(props: TextAreaTypes){
    return(
        <div className="flex flex-col w-full gap-[.5rem]">
            <div aria-disabled={props.disabled} className="
                flex
                flex-col
                aria-disabled:bg-zinc-200
                border-[1px]
                border-zinc-300
            ">
                <textarea
                    onChange={(event) => {
                        let val = event.target.value
                        if (props.type == "binary"){
                            let binary = val.replaceAll(/[^0-1]*/g, '')
                            props.setBinary(binary)
                            props.setDecimal('')
                            props.setDecimal(BinaryToDecimal(binary))
                        } else if (props.type == "decimal"){
                            let decimal = val.replaceAll(/[^0-9]*/g, '')
                            props.setDecimal(decimal)
                            props.setBinary('')
                            if(decimal == "0") props.setBinary("0")
                            else props.setBinary(DecimalToBinary(decimal))
                        }
                    }}
                    value={props.value}
                    maxLength={75}
                    disabled={props.disabled}
                    placeholder={props.disabled ? "Valor convertido" : "Insira um valor"}
                    className="
                        resize-none
                        w-full
                        h-[8rem]
                        md:h-[12rem]
                        p-[1rem]
                        outline-none
                        disabled:bg-zinc-200
                        text-md
                        md:text-lg
                    "
                />
                <div className="flex items-center justify-between flex-row-reverse p-[1rem]">
                    {props.disabled && 
                    <button onClick={() => {
                        navigator.clipboard.writeText(props.value ? props.value : "Texto não copiado")
                    }}>
                        <CopyIcon className="cursor-pointer" size={"1.2rem"} strokeWidth={1.5} />
                    </button>
                    }
                    {props.disabled
                    ?<p className="text-sm md:text-lg">{props.value?.length}</p>
                    :<p className="text-sm md:text-lg">{props.value?.length}/75</p>
                    }
                </div>
            </div>
        </div>
    )
}