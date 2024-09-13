'use client';

import {useEffect, useState} from "react";
import styles from "../../styles/Biography.module.scss";

const Biography = () => {
    const [bio, setBio] = useState('');

     useEffect(() => {
         fetch('http://localhost:8000/api/biography')
             .then(response => response.json())
             .then(data => setBio(data.content));
     }, []);

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Автобиография</h1>
                <p className="text-gray-600">{bio}</p>
            </div>
        </div>
    );
};

export default Biography;