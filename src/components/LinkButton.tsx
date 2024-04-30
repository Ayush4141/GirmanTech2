import Link from "next/link"

interface LinkButtonProps {
    isActive?: boolean
    label: string
    handleClick: (selectedLink: string) => void
}

const LinkButton:React.FC<LinkButtonProps> = ({label , isActive, handleClick}) => {
    return(
        <div >
            <button onClick={() => {
                handleClick(label)
            }} className={`px-6 ${isActive ? 'bg-[#18004C] text-white rounded-xl text-sm p-1' : ''}` }>{label}</button>
            
        </div>
    )
}

export default LinkButton;