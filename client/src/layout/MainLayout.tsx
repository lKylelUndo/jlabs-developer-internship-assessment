import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider";

const MainLayout = () => {
  const { auth, setAuth } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      const responseData = await response.json();
      console.log(responseData);

      if (!response.ok) {
        throw new Error("Internal error occur");
      }

      setAuth({
        userId: null,
        name: null,
        email: null,
        isAuthenticated: null,
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-slate-900 p-4">
        <div className="w-3/4 mx-auto flex justify-between items-center">
          <a className="text-xl text-gray-200">Simple Auth</a>

          <div>
            {auth.isAuthenticated && (
              <>
                <button className="text-gray-100 hover:underline" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;
