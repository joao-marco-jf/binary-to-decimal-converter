export default function pageHowItWork(){
    return(
        <main className="flex flex-col justify-center px-[1rem] xl:px-[15rem] min-h-[100vh] gap-[2.8rem]">
            <h1 className="text-[2rem] text-zinc-700 font-bold">Como é feita a conversão</h1>
            <div className="flex flex-col gap-[1rem]">
                <h2 className="text-[1.4rem] text-zinc-700 font-bold">Binário para Decimal:</h2>
                <p>
                    <strong>1. Posicionamento dos Dígitos:</strong> Ao converter um número binário para decimal, a posição de cada dígito é fundamental. O dígito mais à direita representa 2<sup>0</sup> o próximo à esquerda 2<sup>1</sup>, e assim por diante.
                </p>
                <p>
                    <strong>2. Exponenciação de 2:</strong> Aplica-se a exponenciação de 2 a cada posição do dígito binário. Por exemplo, para 1101, o cálculo seria 1 * 2<sup>3</sup> + 1 * 2<sup>2</sup> + 0 * 2<sup>1</sup> + 1 * 2<sup>0</sup>.
                </p>
                <p>
                    <strong>3. Multiplicação e Soma:</strong> A multiplicação dos dígitos binários pelas potências de 2 resulta em valores individuais para cada posição. A soma destes valores fornece o equivalente decimal.
                </p>
            </div>

            <div className="flex flex-col gap-[1rem]">
                <h2 className="text-[1.4rem] text-zinc-700 font-bold">Decimal para Binário:</h2>
                <p>
                    <strong>1. Divisão por 2:</strong> Ao converter decimal para binário, começamos dividindo por 2. O resto é o dígito menos significativo do número binário.
                </p>
                <p>
                    <strong>2. Continue Dividindo:</strong> O quociente é dividido por 2, repetindo o processo até que o quociente seja zero. Os restos são anotados em ordem inversa.
                </p>
                <p>
                    <strong>3. Número Binário:</strong> Lendo os restos da última divisão para a primeira, obtemos o número binário equivalente.
                </p>
            </div>
        </main>
    )
}