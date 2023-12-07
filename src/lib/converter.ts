export function DecimalToBinary(value: string): string{
    let binary: string[] = []
    let num = parseInt(value)
    while (num >= 1){
        let rest = num%2
        num = (num - rest) / 2
        binary.push(rest.toString())
    }
    return binary.reverse().toString().replaceAll(',', '');
}

export function BinaryToDecimal(value: string): string{
    let decimal: number = Number()

    let chars: number[] = []
    for(let i = 0; i < value.length; i++){
        chars.push(parseInt(value[i]))
    }

    chars = chars.reverse()
    for(let i = 0; i < chars.length; i++){
        decimal = decimal + chars[i] * 2 ** i
    }

    return value == "" ? "" : decimal.toString()
}