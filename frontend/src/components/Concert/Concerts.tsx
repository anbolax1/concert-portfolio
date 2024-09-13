'use client';

import styles from '../../styles/Concert.module.scss';
import ConcertCard, {IConcert} from "./ConcertCard";
import {useEffect, useState} from "react";

const Concerts = () => {
    const [concerts, setConcerts] = useState<IConcert[]>([]);


    useEffect(() => {
        /*fetch('http://localhost:8000/api/concerts')
            .then(response => response.json())
            .then(data => setConcerts(data));*/
        setConcerts([
            {
                id: 1,
                title: "Rock Fest 2023",
                date: "2023-07-15",
                location: "Central Park, New York"
            },
            {
                id: 2,
                title: "Jazz Night",
                date: "2023-08-20",
                location: "Blue Note, New York"
            },
            {
                id: 3,
                title: "Classical Evening",
                date: "2023-09-10",
                location: "Carnegie Hall, New York"
            },
            {
                id: 4,
                title: "Pop Extravaganza",
                date: "2023-10-05",
                location: "Madison Square Garden, New York"
            },
            {
                id: 5,
                title: "Indie Music Festival",
                date: "2023-11-12",
                location: "Brooklyn, New York"
            }
        ]);
    }, []);
    return (
        <div className={styles.container}>
            <div className="max-w-2xl p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Афиша концертов</h1>
                <ul className="space-y-4">
                    {concerts.map(concert => (
                        <li key={concert.id}>
                            <ConcertCard concert={concert} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Concerts;
