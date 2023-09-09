import { Buttons } from "../../components/index";
import Icon from '@mdi/react';
import { mdiBarcodeScan } from '@mdi/js';
import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

export const BarcodeScannerControl = ({ onScan }) => {
    const [scanResult, setScanResult] = useState(null);
    const [showScanner, setShowScanner] = useState(false);

    useEffect(() => {
        let scanner; // Declare scanner here to have access in onScanSuccess and onScanError

        function onScanSuccess(result) {
            scanner.clear();
            setScanResult(result);
            onScan(result);
        }

        function onScanError(error) {
            console.warn(error);
        }

        if (showScanner) {
            scanner = new Html5QrcodeScanner('reader', {
                qrbox: {
                    width: 250,
                    height: 250,
                },
                fps: 5,
            });
            scanner.render(onScanSuccess, onScanError);
        }
        // Clean up the scanner when showScanner becomes false
        return () => {
            if (scanner) {
                scanner.clear();
            }
        };
    }, [showScanner]);

    function handleScanClick() {
        setShowScanner(!showScanner);
    }

    return (
        <div className="flex flex-col gap-6">
            <Buttons.ActionButton onClick={handleScanClick} type="button" text="Scan by code" icon={<Icon path={mdiBarcodeScan} size={1.2} />} />
            {showScanner && (
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}>
                        <div id="reader"></div>
                        {scanResult ? (
                            <p className="text-xl mt-2">Last scanned ISBN: {scanResult}</p>
                        ) : (
                            null
                        )}
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    )
};

BarcodeScannerControl.propTypes = {
    onScan: PropTypes.func,
}
