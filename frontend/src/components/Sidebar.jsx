import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Sidebar = () => {
  const { auth } = useAuth();
  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10  ">
      <p className="text-xl font-bold">
        {auth.rol}: {auth.nombre}
      </p>
      <Link
        className="bg-slate-900 w-full p-3 text-white uppercase font-bold block mt-5 text-center rounded-lg"
        to="crear-mesa"
      >
        Nueva Mesa
      </Link>
    </aside>
  );
};

export default Sidebar;
