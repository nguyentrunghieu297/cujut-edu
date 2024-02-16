import { useState } from "react";
import InfoModal from "../components/InfoModal";

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <InfoModal isOpen={isOpen} onClose={closeModal}>
                {" "}
            </InfoModal>
        </div>
    );
}
