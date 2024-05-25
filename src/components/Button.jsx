export default function Button({ label, onClick, hierarchy = "primary", type }) {

    return (
        <button className={`print:hidden rounded px-2 ${hierarchy === "primary" && "bg-black text-white"} ${hierarchy === "secondary" && "bg-slate-300 text-slate-700"}`}
            onClick={onClick}
            type={type}>
            {label}
        </button>
    )
}