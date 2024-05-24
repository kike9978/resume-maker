export default function Input({ value, name, onChange, placeholder, label, type = "text", suggestion }) {
    return (
        <label htmlFor="">
            {label}: {" "}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder} />
            {suggestion && <span>{suggestion}</span>}
        </label>
    )
}