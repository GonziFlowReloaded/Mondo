import useMesas from "../hooks/useMesas";

const Mesas = () => {
  const { mesas } = useMesas();

  console.log(mesas);



  return (
    <>
      <h1 className="text-4xl font-bold">Mesas de exámenes</h1>
      <div className="mt-4">
     
      </div>
    </>
  );
};

export default Mesas;
