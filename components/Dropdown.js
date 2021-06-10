import styles from "../styles/Dropdown.module.css"

export default function Dropdown({values, ...props}) {
  return (
    <select className={styles.select} {...props}>
      <option value="" disabled>
        {props.name}
      </option>
      {values.map((value, i) => (
        <option key={i} value={value}>
          {i}: {value}
        </option>
      ))}
    </select>
  );
}
