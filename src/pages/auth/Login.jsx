import React from "react";
import Google from "media/google_logo.png";


const Login = () => {
  return (
    <>
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-900">
          -------Bienvenido-------
        </h2>
      </div>

      <div className="max-w-md w-full m-6">
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 border 
            border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 
            hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 
            focus:ring-gray-500"
          >
            <div className="flex items-center justify-start">
              <img src={Google} alt="Logo Google" className="h-6 w-6" />
              <span className="mx-4">Resgístrate con Google</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
