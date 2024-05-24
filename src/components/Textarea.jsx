export default function Textarea({ label, name, value, onChange, suggestion }) {
    return (
        <label htmlFor="" className="flex flex-col">
            {label}: {" "}
            <textarea
                className="border border-solid border-slate-300 rounded px-1"
                name={name}
                value={value}
                onChange={onChange}
                rows={5} />
            {suggestion && <span className="text-xs text-slate-500">{suggestion}</span>}
        </label>
    )
}
