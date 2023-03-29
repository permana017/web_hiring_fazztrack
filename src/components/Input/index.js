import React from 'react'

function Input({label, type, placeholder, defaultValue, onChange}) {
    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className="input input-bordered w-full"
                defaultValue={defaultValue}
                onChange={onChange}
                />
        </div>
    )
}


export default Input