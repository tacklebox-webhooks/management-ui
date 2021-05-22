const GridItem = ({ Component }) => {
  return (
    <div className="col-span-1 bg-gray-100">
      <dt></dt>
      <dd className="mt-1">{Component ? <Component /> : null}</dd>
    </div>
  );
};

export default GridItem;
