import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import fis from '../assets/fis.png';
import majorana from '../assets/majorana.png';
import '../css/navbar.css';
import Info_Flavio from './Info_Flavio';
import Info_Miki from './Info_Miki';
import Donate from './Donate';
import Shop from './Shop';
import { Card } from 'primereact/card';

export default function Navbar() {

    // Inizializza lo stato per mostrare subito lo shop all'avvio
    const [dialogVisible, setDialogVisible] = useState(true);
    const [dialogType, setDialogType] = useState("shop");

    const items = [
        {
            label: 'Negozio',
            icon: 'pi pi-shop',
            command: () => {
                setDialogType("shop");
                setDialogVisible(true);
            }
        },
        {
            label: 'Donazione',
            icon: 'pi pi-dollar',
            command: () => {
                setDialogType("donate");
                setDialogVisible(true);
            }
        },
        {
            label: 'Info',
            icon: 'pi pi-info-circle',
            command: () => {
                setDialogType("info");
                setDialogVisible(true);
            }
        }
    ];

    const start = <img alt="logo" src={fis} height="50" className="mr-2"></img>;
    const end =
        <dir className="endNav">
            <Card className="saldo" title="Saldo di Flavio:">
                <p> 0.00 €</p>
            </Card>
            <img alt="logo" src={majorana} height="60" className="mr-2"></img>
        </dir>

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />

            {dialogVisible && dialogType === "info" && (
                <>
                    <Info_Flavio
                        visible={dialogVisible}
                        onHide={() => setDialogVisible(false)}
                    />
                    <Info_Miki
                        visible={dialogVisible}
                        onHide={() => setDialogVisible(false)}
                    />
                </>
            )}

            {dialogVisible && dialogType === "donate" && (
                <>
                    <Donate
                        visible={dialogVisible}
                        onHide={() => {
                            setDialogVisible(false);
                            setDialogType("shop"); // Quando si chiude il dialogo "donate", riapre lo shop
                            setTimeout(() => setDialogVisible(true), 100); // Riapre dopo un breve ritardo
                        }}
                    />
                </>
            )}

            {dialogVisible && dialogType === "shop" && (
                <>
                    <Shop
                        visible={dialogVisible}
                        onHide={() => setDialogVisible(false)}
                    />
                </>
            )}
        </div>
    )
}