export type SelectProps = {
  label: string;
  fieldName?: string;
  options: Option[];
  defaultValue?: string;
};

type Option = {
  label: string;
  value: string;
};
