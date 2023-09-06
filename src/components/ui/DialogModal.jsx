import { motion, AnimatePresence } from "framer-motion";
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import { Buttons } from "../index";
import { mdiCheckCircle } from '@mdi/js';
import { mdiAlertCircle } from '@mdi/js';

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const modalVariants = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2 }
    }
}


export const DialogModal = ({ show, isError, onConfirmClick }) => {
    const title = isError ? "Uh oh!" : "Success!";

    const icon = isError ? (
        <Icon path={mdiAlertCircle} size={8} className="text-red-500" />
    ) : (
        <Icon path={mdiCheckCircle} size={8} className="text-green-500" />
    );

    const text = isError ? "There has been an error trying to complete your request." : "Your request has been fulfilled succesfully.";

    return (
        <AnimatePresence mode="wait">
            {show && (
                <motion.div className="flex justify-center items-center backdrop-blur-md fixed top-0 left-0 w-full h-full z-1" variants={backdropVariants} animate="visible" initial="hidden" exit="hidden">
                    <motion.div className="bg-slate-50 shadow-lg border rounded-xl p-6 text-center" variants={modalVariants}>
                        <div className="flex flex-col justify-center items-center gap-4">
                            {icon}
                            <p className="text-2xl text-gray-800 font-semibold">{title}</p>
                            <p className="text-xl text-gray-600">{text}</p>
                        </div>
                        <div className="flex justify-center items-center mt-8 border-t-2">
                            <Buttons.ActionButton
                                onClick={onConfirmClick}
                                type="button"
                                text="Confirm"
                                className="bg-transparent text-gray-800 font-medium normal-case hover:bg-transparent"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
};

DialogModal.propTypes = {
    show: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    onConfirmClick: PropTypes.func.isRequired,
}

