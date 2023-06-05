import { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import "./TicketPage.css";

const TicketPage: React.FC = () => {
    const [total, setTotal] = useState<number>(() => {
        const savedTotal = localStorage.getItem('total');
        return savedTotal ? Number(savedTotal) : 0;
    });

    const handleButtonClick = (amount: number) => {
        setTotal(prevTotal => prevTotal + amount);
    };

    useEffect(() => {
        localStorage.setItem('total', total.toString());
    }, [total]);

    return (
        <>
            <div id="ticket-title-container">
                <h1 id="ticket-title">Tickets</h1>
                <p id="ticket-p">Koop hier uw tickets voor ons tijdelijke halloween themed pretpark </p>
            </div>
            <div id="ticket-container">
                <div id="ticket-price-container">
                    <div className="ticket">
                        <h1 className="ticket-title">Standaard</h1>
                        <h2>20$</h2>
                        <p className="ticket-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate magna lorem. </p>
                        <Button
                            variant="contained"
                            style={{ borderColor: 'white', color: 'white', backgroundColor: 'black', }}
                            onClick={() => handleButtonClick(20)}
                        >KOOP NU</Button>
                    </div>
                    <div className="ticket" id="main-ticket">
                        <h1 className="ticket-title">VIP</h1>
                        <h2>40$</h2>
                        <p className="ticket-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate magna lorem.</p>
                        <Button
                            variant="contained"
                            style={{ borderColor: 'white', color: 'white', backgroundColor: 'black', }}
                            onClick={() => handleButtonClick(40)}
                        >KOOP NU</Button>
                    </div>
                    <div className="ticket">
                        <h1 className="ticket-title">MVP</h1>
                        <h2>60$</h2>
                        <p className="ticket-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate magna lorem.</p>
                        <Button
                            variant="contained"
                            style={{ borderColor: 'white', color: 'white', backgroundColor: 'black', }}
                            onClick={() => handleButtonClick(60)}
                        >KOOP NU</Button>
                    </div>
                </div>
                <div id="total-price">
                    <h1> Totale prijs: ${total} </h1>
                </div>
            </div>
        </>
    )
}

export default TicketPage;
