export default function Button({ label, onClick, hierarchy = "primary", type }) {

    return (
        <button className={`print:hidden rounded px-2 ${hierarchy === "primary" && "bg-blue-500 text-white hover:bg-blue-600"} ${hierarchy === "secondary" && "bg-slate-200 text-slate-800 hover:bg-slate-300"}`}
            onClick={onClick}
            type={type}>
            {label}
        </button>
    )
}