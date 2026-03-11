export default function Button({ children, onClick, variant = 'primary' }) {

    const baseStyle = "px-4 py-2 rounded font-bold cursor-pointer transition-colors";
    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}