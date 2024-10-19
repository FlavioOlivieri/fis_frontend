import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import '../css/Donate.css';

export default function Donate({ visible, onHide, position }) {

    const [value, setValue] = useState('');

    return (
        <div className="card">
            <Dialog header="Dona al team di sviluppo" visible={visible} onHide={onHide} position={position} style={{ width: '40vw' }} draggable={false} resizable={false} >
                <p> Un caffè è sempre apprezzato ☕️</p>
                <p className="m-0">
                    <div className="donate">
                        <FloatLabel>
                            <InputText id="Valore della donazione" value={value} onChange={(e) => setValue(e.target.value)} />
                            <label className="placeholder">Valore della donazione</label>
                        </FloatLabel>
                        <Button label="Dona" severity="success" outlined />
                    </div>
                </p>
            </Dialog>
        </div>
    )
}
