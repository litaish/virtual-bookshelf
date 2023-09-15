import { useState } from "react";

export function useCTAModal() {
    const [show, setShow] = useState(false);
    const [content, setContent] = useState({ title: '', text: '' })

    const open = ({ title, text }) => {
        setContent({ title, text });
        setShow(true);
    }

    const close = () => {
        setShow(false);
        setContent({ title: '', text: '' });
    }

    return {
        show,
        content,
        open,
        close,
    }
}