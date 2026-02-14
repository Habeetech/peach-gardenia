

export function CheckboxField({ label, name, value = "yes", required = false, className = "" }) {
    const id = name;

    return (
        <label htmlFor={id} className={className}>
            <input
                id={id}
                name={name}
                type="checkbox"
                value={value}
                required={required}
            />
            {label}
        </label>
    );
}
