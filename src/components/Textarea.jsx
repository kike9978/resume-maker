export default function Textarea({ label, name, value, onChange }) {
    return (
        <label htmlFor="">
            {label}: {" "}
            <textarea name={name}
                value={value}
                onChange={onChange} />
        </label>
    )
}
