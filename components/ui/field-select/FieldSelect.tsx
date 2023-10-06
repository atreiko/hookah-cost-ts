import { FC } from "react";

interface IFieldSelect {
  id: string;
  name: string;
  label: string;
  register?: any;
  tooltip: string;
  options: Array<{ value: string; label: string }>;
}

const FieldSelect: FC<IFieldSelect> = ({ id, name, label, tooltip, options, register }) => {

  const renderOptions = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <>
      <label data-tooltip={tooltip} htmlFor={id}>
        {label}
      </label>
      <select id={id} {...register(name)}>
        {renderOptions}
      </select>
    </>
  );
};

export default FieldSelect;
