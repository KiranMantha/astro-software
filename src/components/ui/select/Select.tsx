import { useId } from "preact/hooks";
import styles from "./Select.module.scss";
import type { SelectProps } from "./Select.model";

export const Select = ({
  fieldName,
  label,
  options,
  defaultValue,
}: SelectProps) => {
  const inputId = useId();

  return (
    <div className={styles.select}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>
      <select id={inputId} name={fieldName} value={defaultValue}>
        {options.map(({ label, value }) => {
          return (
            <option key={label} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
