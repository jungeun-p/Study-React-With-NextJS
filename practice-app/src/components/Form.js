import React from 'react'

export default function Form({ value, setValue, CreateTodo }) {

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <div>
            <form style={{ display: 'flex' }} onSubmit={CreateTodo}>
                <input 
                    type="text"
                    name="value"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="write your work to do"
                    value={value}
                    onChange={handleChange}
                />
                <input 
                    type="submit"
                    value="input"
                    className="btn" 
                    style={{ flex: '1' }}
                />
            </form>            
        </div>
    )
}
