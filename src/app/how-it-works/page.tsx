import Link from "next/link"

export default function pageHowItWork(){
    return(
        <main className="flex flex-col p-[1rem] md:p-[5rem] lg:px-[10rem] xl:px-[20rem] 2xl:px-[30rem] gap-[2.8rem] text-md lg:text-lg">
            <h1 className="text-[1.6rem] md:text-[2rem]">Por qual intuito essa aplicação foi desenvolvida</h1>
            <p>Está aplicação foi desenvolvida com o intuito de demostrar certas vantagens na utilização de NextJS e ReactJS em projetos de pequeno porte. O desenvolvimento deste projeto utilizando do framework NextJS não apresentou quaisquer dificuldade indicando que a utilização deste framework em projetos de pequeno porte também é viável e até mesmo se provou com um facilitador no desenvolvimento.</p>
            <p>Para fins de estudos sobre a utilização do framework NextJS e ReactJS o código desta aplicação estará completamente disponível neste <Link href="https://github.com/joao-marco-jf/binary-to-decimal-converter"><u>repositório</u></Link>.</p>

            <h1 className="text-[1.6rem] md:text-[2rem]">Como é feita a conversão</h1>
            <p>A abordagem da conversão entre sistemas binário e decimal demanda uma compreensão técnica refinada, focada na precisa disposição dos dígitos e nas operações fundamentais envolvidas.</p>
            <p>Ao realizar a migração de um número binário para seu equivalente decimal, a posição de cada dígito assume um papel crítico. A significância crescente, da direita para a esquerda, obedece a potências de 2, com o dígito mais à direita representando 2^0, o próximo 2^1, e assim por diante.</p>
            <p>A aplicação da exponenciação de 2 a cada posição do dígito binário é imperativa. Em exemplificação, para o binário 1101, a fórmula é expressa como 1 * 2^3 + 1 * 2^2 + 0 * 2^1 + 1 * 2^0.</p>
            <p>O ápice da operação reside na multiplicação e soma dos dígitos binários pelas potências de 2. A acumulação destes produtos revela o valor decimal correspondente, fundamentando-se em princípios matemáticos precisos.</p>
            <p>No sentido inverso, ao converter decimal para binário, inicia-se com a divisão por 2. O restante de cada divisão assume o papel do dígito menos significativo no número binário resultante. Este processo iterativo prossegue até que o quociente atinja zero, registrando os restos em ordem inversa.</p>
            <p>Lendo os restos na ordem inversa da última divisão até a primeira, emerge o número binário equivalente. A conversão entre binário e decimal, portanto, é desvelada como uma intricada coreografia matemática, onde a precisão técnica e a lógica se entrelaçam para revelar os segredos subjacentes desses sistemas numéricos.</p>
        </main>
    )
}