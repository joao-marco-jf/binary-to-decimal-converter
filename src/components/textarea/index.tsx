import { BinaryToDecimal, DecimalToBinary } from "@/lib/converter"

interface TextAreaTypes{
    type: "binary" | "decimal"
    label: string | undefined
    sublabel: string | undefined
    placeholder: string | undefined
    value: string | undefined
    setDecimal: React.Dispatch<React.SetStateAction<string>>
    setBinary: React.Dispatch<React.SetStateAction<string>>
}

export default function TextArea(props: TextAreaTypes){
    return(
        <div className="flex flex-col w-full gap-[.5rem]">
            <div className="flex flex-col leading-[1.2rem]">
                <label className="text-[1.2rem] text-zinc-700 font-bold">{props.label}</label>
                <label className="text-[.8rem] text-zinc-400 font-medium">{props.sublabel}</label>
            </div>
            <textarea
                onChange={(event) => {
                    let val = event.target.value
                    if (props.type == "binary"){
                        let binary = val.replaceAll(/[a-z]/g, '').replaceAll(/[2-9]/g, '')
                        props.setBinary(binary)
                        props.setDecimal('')
                        props.setDecimal(BinaryToDecimal(binary))
                    } else if (props.type == "decimal"){
                        let decimal = val.replaceAll(/[a-z]/g, '')
                        props.setDecimal(decimal)
                        props.setBinary('')
                        if(decimal == "0") props.setBinary("0")
                        else props.setBinary(DecimalToBinary(decimal))
                    }
                }}
                placeholder={props.placeholder}
                value={props.value}
                maxLength={77}
                className="
                    resize-none
                    w-full
                    h-[12rem]
                    p-[1rem]
                    outline-none
                    border-[2px]
                    border-zinc-100
                    rounded
                "
            />
        </div>
    )
}