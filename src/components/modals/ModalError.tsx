import { X } from "lucide-react"; // Icône de croix pour fermer
import Title from "../decoration/Title";

type ModalErrorProps = {
    isOpen: boolean;
    message: string;
    setIsOpen: (newState: boolean) => void;
};

const ModalError = ({ isOpen, message, setIsOpen }: ModalErrorProps) => {
    return (
        <div>
            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    {/* Modal Content */}
                    <div className="bg-[#10101f] text-white rounded-lg shadow-lg w-11/12 sm:w-96 p-6 relative">
                        {/* Header */}
                        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                            <Title size={2} title="Une erreur est survenue !"/>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="py-4">
                            <p className="text-gray-300">{message}</p>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white py-2 px-4 rounded-md font-semibold shadow-md hover:scale-105 transition-transform"
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
