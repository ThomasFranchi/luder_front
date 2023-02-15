function Input({name, label, onChange, value, type = 'text', required = "false"}) {

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name} type={type} value={value} onChange={onChange} required={required}/>
        </div>
    )
};

export default Input;