import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL;

// Connect to the server (adjust the URL as needed)
const socket = io(SOCKET_URL!);

const GridComponent: React.FC<any> = ({ children, data }) => {
    const [valores, setValores] = useState<any>([]);

    useEffect(() => {
        setValores(data);
    }, [data]); // Update valores when data prop changes

    useEffect(() => {
        // Listen for color updates
        socket.on('updateColor', (update: any) => {
            console.log(update)
            const newData = valores.map((item:any) => {
                if (item.value === Number(update.value)) {
                    return { ...item, color: update.color }; // Update color
                }
                return item;
            });
            setValores(newData);
        });

        return () => {
            socket.off('updateColor'); // Turn off listener when component unmounts
        };
    }, [valores]); // Depend on valores to ensure updates are applied correctly

    return (
        <div>
            <table border={1}>
                <tbody>
                    <tr>
                        {valores.map((value: any, index: number) => (
                            <td style={{ background: value.color }} key={index}>{value.value}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GridComponent;
