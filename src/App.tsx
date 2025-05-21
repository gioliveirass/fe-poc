import router from "./router";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router";

function App() {
  return (
    <>
      <ToastContainer
        z-index="100000"
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
