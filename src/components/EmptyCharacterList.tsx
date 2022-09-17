import { MagnifyingGlass } from "phosphor-react";

export function EmptyCharacterList(){
    return(
        <div className="
            w-[100%] max-w-[650px] flex flex-col items-center justify-center text-center
            mt-16 border-t-[1px] border-gray-700 pt-10 px-6
        ">
           <div className="w-full max-w-[500px] flex flex-col items-center justify-center">
            <MagnifyingGlass size="60" color="#808080" weight="thin" />
                <p className="text-gray-500 mt-4">
                    Encontre qualquer personagem da melhor série animada da atualidade com apenas um clique
                </p>
           </div>
        </div>
    )
}