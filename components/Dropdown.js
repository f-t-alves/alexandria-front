import styles from "../styles/Dropdown.module.css"

export default function Dropdown({props}) {
  return (
    <select className={styles.select} name={props.name} id={props.id} defaultValue={props.defaultValue}>
      <option value="" disabled>
        {props.name}
      </option>
      {props.values.map((value, i) => (
        <option key={i} value={value}>
          {i}: {value}
        </option>
      ))}
    </select>
  );
}
