import React from "react";
import Button from "../Button";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../../assets/images/location.svg";

export type CardProps = {
    id: string;
    name: string;
    location: string;
    description: string;
    price: number;
    image: string;
}

function Card({ id, name, location, description, price, image }: CardProps) {
    return (
        <article className={styles.card}>
            <img width="300" height="200" src={image} alt={name} />
            <div className={styles.body}>
                <h4 className={styles.heading}>{ name }</h4>
                <div className={styles.location}>
                    <i><Icon /></i>
                    { location }
                </div>
                <div className={styles.description}>{ description }</div>
                <div className={styles.price}>от ${ price }</div>
                <div className={styles.buttonContainer}>
                    <Link to={"/" + id}><Button size="small">Подробнее</Button></Link>
                </div>
            </div>
        </article>
    );
}

export default Card;