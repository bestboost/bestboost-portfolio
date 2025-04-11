import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {

    return (
        <ToastContainer
  position="bottom-left"
  theme="colored"
  autoClose={5000} // закривається через 5 секунд
  hideProgressBar={false} // показувати прогрес-бар
  newestOnTop={false} // нові тости з'являються внизу
  closeButton={false} // не буде кнопки закриття
/>

    )
};

export default Toast;