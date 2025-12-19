export type SelectProps = {
  label: string;
  fieldName?: string;
  options: Option[];
};

type Option = {
  label: string;
  value: string;
};
