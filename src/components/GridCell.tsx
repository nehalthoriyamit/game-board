interface GridCellPropsI {
  numValue: number | string;
  gridClass?: string;
}

const GridCell = (props: GridCellPropsI) => {
  const { numValue, gridClass } = props;

  return (
    <div
      className={`w-20 h-20 flex items-center justify-center border border-gray-300 text-center font-bold text-lg ${
        gridClass || ""
      }`}
    >
      {numValue}
    </div>
  );
};

export default GridCell;
