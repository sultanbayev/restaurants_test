import Button from "../Button";
import Input from "../Input";
import styles from "./Search.module.css";
import iconSrc from "../../assets/images/search-icon.svg"

function Search() {
    return (
        <section className={styles.search}>
            <div className={styles.content}>
                <h1 className={styles.heading}>Найдите лучшее предложение от ресторана</h1>
                <form>
                    <div className={styles.formContainer}>
                        <div className={styles.inputContainer}>
                            <Input icon={iconSrc} placeholder="Город, адрес, шоссе или ЖК" />
                        </div>
                        <div className={styles.buttonContainer}>
                            <Button>Найти</Button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Search;