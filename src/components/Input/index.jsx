export const Input = ({name,label,error, ...props}) => (
    <div className="flex flex-col">
        <label className="text-base font-bold text-gray-500 mb-2" htmlFor={name}>{label}</label>
        <input className={`p-3 border border-gray-700 text-lg rounded-xl focus:outline focus:outline-1 focus:outline-gray-700 ${error && 'border-red-300'}`} {...props} name={name} id={name}></input>
        <span className="p-2 text-base text-red-300">{error}</span>
    </div>
)