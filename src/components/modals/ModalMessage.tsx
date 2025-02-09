import { useContext } from "react";
import { X } from "lucide-react";
import Title from "../decoration/Title";
import { ModalContext } from "@/shared/context/ModalContext";

const MessageModal = () => {
    const modalCtx = useContext(ModalContext);

    if (!modalCtx.isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[#10101f] text-white rounded-lg shadow-lg w-11/12 sm:w-96 p-6 relative">
                {/* Header */}
                <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                    {modalCtx.type === "error" ? (
                        <Title size={2} title="Une erreur est survenue !" />
                    ) : (
                        <h2 className="text-xl font-bold">Confirmation</h2>
                    )}
                    <button onClick={() => modalCtx.setIsOpen(false)} className="text-gray-400 hover:text-white transition">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="py-4">
                    <p className="text-gray-300">{modalCtx.message}</p>
                </div>

                {/* Footer */}
                <div className="flex justify-end">
                    <button
                        onClick={() => {
                            modalCtx.setIsOpen(false);
                            if (modalCtx.onClose) modalCtx.onClose();
                        }}
                        className={`bg-gradient-to-r ${modalCtx.type === "error"
                            ? "from-[#6a11cb] to-[#2575fc]"
                            : "from-[#11cb5f] to-[#0ba34c]"
                            } text-white py-2 px-4 rounded-md font-semibold shadow-md hover:scale-105 transition-transform`}
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageModal;
