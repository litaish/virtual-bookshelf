import { Buttons } from "../../components/index";
import Icon from '@mdi/react';
import { mdiBarcodeScan } from '@mdi/js';
import { useEffect, useState } from "react";
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from "html5-qrcode";

export const BarcodeScannerControl = () => {
    const [scanResult, setScanResult] = useState(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5,
        })

        scanner.render(onScanSuccess, onScanError);

        function onScanSuccess(result) {
            scanner.clear();
            setScanResult(result);
        }

        function onScanError(error) {
            console.warn(error);
        }
    },[]);

    return (
        <div className="flex flex-col gap-6">
            <Buttons.ActionButton type="button" text="Scan by code" icon={<Icon path={mdiBarcodeScan} size={1.2} />} />
            {scanResult ? (
                <div>{scanResult}</div>
            ) : (
                <div id="reader"></div>
            )}
        </div>
    )
};
