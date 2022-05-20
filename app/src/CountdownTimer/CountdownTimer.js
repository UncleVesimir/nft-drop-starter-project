import React, {useEffect, useState} from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({dropDate}) => {
    const [timerString, setTimerString] = useState("");

    useEffect(() => {
        console.log("Setting Interval...")

        const interval = setInterval(() => {
            const currentDate = new Date().getTime();
            const distance = dropDate - currentDate;

            if( distance < 0) {
                console.log("Clearing Interval...")
                clearInterval(interval)
            }

            const days = Math.floor(distance/ (1000*60*60*24));
            const hours = Math.floor((distance % (1000 * 60 *60 * 24))/(1000*60*60))
            const minutes = Math.floor((distance % (1000 * 60 *60))/(1000*60));
            const seconds = Math.floor((distance % (1000 * 60))/(1000 ));

            setTimerString(`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`)
        }, 1000)
    
        return () => {
            clearInterval(interval)
        }
    }, [dropDate]);

    return (
    <div className="timer-container">
        <p className="timer-header">The Drop Starts In</p>
        {timerString && <p className="timer-value">{`⏰ ${timerString}`}</p>}
    </div>)
}

export default CountdownTimer