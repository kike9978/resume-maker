export default function Input({ value, name, onChange, placeholder, label, type = "text", suggestion }) {
    return (
        <label htmlFor="" className="flex flex-col ">
            {label}: {" "}
            <input
                className="truncate border border-solid border-slate-300 rounded px-1"
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder} />
            {suggestion && <span className="text-xs text-slate-500">{suggestion}</span>}
        </label>
    )
}