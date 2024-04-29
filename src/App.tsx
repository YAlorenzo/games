import { RouterProvider } from "react-router-dom"
import { router } from "./app/router"
import { Provider } from "react-redux"
import { store } from "./app/store";
import Notiflix from "notiflix";


function App() {
    Notiflix.Notify.init({
      width: "270px",
      position: "center-top",
      fontFamily: "Passion One",
      fontSize: "25px",
      useIcon: false,
      cssAnimationStyle: "zoom",
    });
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App
