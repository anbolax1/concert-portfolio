'use client';

import styles from '../../styles/Concert.module.scss';

export interface IConcert {
    id: number,
    title: string,
    date: string,
    location: string
}

const ConcertCard = (props: { concert: IConcert }) => {
    const {concert} = props;
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{concert.title}</h2>
            <p className={styles.date}>{concert.date} в {concert.location}</p>
        </div>
    );
};

export default ConcertCard;
