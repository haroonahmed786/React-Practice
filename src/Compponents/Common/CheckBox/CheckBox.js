import "./CheckBox.css";

 export const CheckBox = ({ label, type="checkbox", name="checkbox", placeholder,}) => {
  return<>
   <label>{label}
        <input className="check"
            type={type}
            name={name}
            placeholder={placeholder}
        
        />
        </label>
        
  </>
}

