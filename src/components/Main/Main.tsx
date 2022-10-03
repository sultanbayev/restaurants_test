import React from "react";
import Card from "../Card";
import { CardProps } from "../Card/Card";
import styles from "./Main.module.css"
import imgSrc from "../../assets/images/cafe.png";

const cafes: CardProps[] = [
    {
        id: "1",
        name: "Infinity Plaza",
        location: "Анталья, Турция",
        description: "Один из крупнейших ресторанов в регионе",
        price: 56000000,
        image: imgSrc
    },
    {
        id: "2",
        name: "Infinity Plaza",
        location: "Анталья, Турция",
        description: "Один из крупнейших ресторанов в регионе",
        price: 56000000,
        image: imgSrc
    },
    {
        id: "3",
        name: "Infinity Plaza",
        location: "Анталья, Турция",
        description: "Один из крупнейших ресторанов в регионе",
        price: 56000000,
        image: imgSrc
    },
    {
        id: "4",
        name: "Infinity Plaza",
        location: "Анталья, Турция",
        description: "Один из крупнейших ресторанов в регионе",
        price: 56000000,
        image: imgSrc
    },
    {
        id: "5",
        name: "Infinity Plaza",
        location: "Анталья, Турция",
        description: "Один из крупнейших ресторанов в регионе",
        price: 56000000,
        image: imgSrc
    },
    {
        id: "6",
        name: "Infinity Plaza",
        location: "Анталья, Турция",
        description: "Один из крупнейших ресторанов в регионе",
        price: 56000000,
        image: imgSrc
    },
    {
        id: "7",
        name: "Infinity Plaza",
        location: "Анталья, Турция",
        description: "Один из крупнейших ресторанов в регионе",
        price: 56000000,
        image: imgSrc
    }
]

function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <h1 className={styles.heading}>Популярные предложения</h1>
                <h3 className={styles.subheading}>Предложения, которые любят наши клиенты</h3>
                <div className={styles.cardsContainer}>
                    { cafes.map(({ id, name, location, description, price, image }) => {
                        return <Card
                            key={id}
                            id={id}
                            name={name}
                            location={location}
                            description={description}
                            price={price}
                            image={image}
                        />
                    }) }
                </div>
            </div>
        </main>
    )
}

export default Main;