export const Input = ({ label, type, id, placeholder }) => {
    return (
        <div className="flex flex-col">
            <label
                className="mb-2 text-lg font-medium text-gray-900 md:text-2xl"
                htmlFor={id}>{label}</label>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5 md:text-2xl"
                id={id}
                type={type}
                placeholder={placeholder} />
        </div>
    );
};
