import React from 'react'

const Form = React.memo(({ value, setValue, CreateTodo }) => {
    console.log('Form component');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <div>
            <form onSubmit={CreateTodo} className="flex pt-2">
                <input 
                    type="text"
                    name="value"
                    placeholder="write your work to do"
                    className="w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow"
                    value={value}
                    onChange={handleChange}
                />
                <input 
                    className="p-2 text-blue-400 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-200"
                    type="submit"
                    value="input"
                />
            </form>            
        </div>
    )
})

export default Form;
