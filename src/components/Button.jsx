export default function Button({ label, onClick }) {
    return (
        <button className='print:hidden bg-black rounded text-white px-2'
            onClick={onClick}>
            {label}
        </button>
    )
}