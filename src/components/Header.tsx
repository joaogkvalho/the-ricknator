import Logo from '../assets/logo.png'

export function Header(){
    return(
        <div className="w-[100%] h-[200px] flex items-center justify-center bg-gray-900">
            <img 
                src={Logo}
                alt="The Ricknator"
                className="mt-[-50px] w-[350px] md:w-[450px]"
            />
        </div>
    )
}