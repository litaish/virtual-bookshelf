import { useState } from "react";

export default function useDialogModal() {
    const [show, setShow] = useState(false);
    const [text, setText] = useState("");
    const [isErrorModal, setIsErrorModal] = useState(false);

    const open = ({ text, isErrorModal }) => {
        setText(text);
        setIsErrorModal(isErrorModal)
        setShow(true);
    }

    const close = () => {
        setShow(false);
        setIsErrorModal(false);
        setText("");
    }

    return {
        show,
        text,
        isErrorModal,
        open,
        close,
    }
}