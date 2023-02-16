const Input = ({ label, placeholder, name, setInput, forgot }) => {
    return (
        <div className="mx-0">
            <div className="flex justify-between">
                <label className="">{label}</label>
                {forgot}
            </div>
            <input
                onChange={e => setInput(prev => {
                    return { ...prev, [e.target.name]: e.target.value }
                })}
                className="text-black border-green-600 font-light text-lg border-2 focus:outline-none focus:border-2 focus:border-green-700 rounded px-5 py-2 w-full"
                placeholder={placeholder}
                name={name}
            />
            <span className="error-message"></span>
        </div>
    )
}

export default Input;