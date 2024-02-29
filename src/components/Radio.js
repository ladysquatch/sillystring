import './radio.scss';

export function Radio({value, label, checked, onClickRadio}) {
    return (
        <>  
        <div className="form-control">
            <label for={value}>
                {label}
            </label>

            <input 
                id={value}
              type="radio" 
              onChange={() => onClickRadio(value)} 
              value={value}
              checked={checked}/>

           </div>
        </>
    )
}