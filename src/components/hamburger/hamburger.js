import styles from "./hamburger.module.css";

const Hamburger = ({
    color,
    value,
    onChange
}) => {

    const handleChange = (e) => {
        onChange(e.target.checked);
    };


    return (
        <label
            className={styles["burger"]}
            for="burger"
            style={{ '--burger-color': color }}
        >
            <input
                type="checkbox"
                id="burger"
                checked={value}
                onChange={handleChange}
            />
            <span></span>
            <span></span>
            <span></span>
        </label >
    );
}

export default Hamburger;