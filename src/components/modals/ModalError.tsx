import { X } from "lucide-react"; // Icône de croix pour fermer

type ModalErrorProps = {
    isOpen: boolean;
    message: string;
    setIsOpen: (newState: boolean) => void;
};

const ModalError = (props: ModalErrorProps) => {
    return (
        <div>
            {/* Modal */}
            {props.isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white text-black rounded-lg shadow-lg w-full max-w-2xl border border-gray-300">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300 bg-red-500 text-white">
                            <h2 className="text-xl font-bold">Une erreur est survenue !</h2>
                            <button
                                onClick={() => props.setIsOpen(false)}
                                className="text-white hover:text-gray-200 transition"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                            <p className="mt-2 text-gray-700">{props.message}</p>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 border-t border-gray-300 flex justify-end bg-gray-50">
                            <button
                                onClick={() => props.setIsOpen(false)}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalError;
