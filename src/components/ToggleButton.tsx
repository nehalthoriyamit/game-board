interface ToggleButtonPropsI {
  label: string;
  toggle: boolean;
  handleClick: (value: boolean) => void;
}

const ToggleButton = (props: ToggleButtonPropsI) => {
  const { label, toggle, handleClick } = props;

  return (
    <button
      onClick={() => handleClick(!toggle)}
      className={`px-4 py-2 bg-blue-500 text-white rounded ${
        toggle ? "bg-blue-800" : ""
      }`}
    >
      {label}
    </button>
  );
};

export default ToggleButton;
