import "./inputField.css";
export const InputField = ({ label, type="text", name, email, placeholder,onChange=()=>{} }) => {
    return <>
        <label>{label}</label>
        <input className="input"
            type={type}
            name={name}
            email={email}
            placeholder={placeholder}
            onChange={(e)=>onChange(e.target.value)}
        />
    </>
}
