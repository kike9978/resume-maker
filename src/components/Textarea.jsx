export default function Textarea({ label, name, value, onChange }) {
    return (
        <label htmlFor="" className="flex flex-col">
            {label}: {" "}
            <textarea name={name}
                value={value}
                onChange={onChange} />
        </label>
    )
}
