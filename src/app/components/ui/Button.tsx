
interface ButtonProps {
    text : string;
    link : string;

};

export default function Button({text, link} : ButtonProps){
    return (
        <button type="button" className="border border-black drop-shadow-lg w-40 h-12 bg-white rounded-2xl hover:bg-gradient-to-t hover:from-gradient-start hover:to-gradient-stop animate-bounce transition duration-350">
            <a href={link} className="text-black font-montserrat font-semibold text-md flex gap-1 items-center justify-center">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/>
                </svg>
                    {text}
            </a>
        </button>

    )
}