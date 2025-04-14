import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  return (
    <ToastContainer
      position="bottom-left" // Позиція тостів
      theme="colored" // Кольорова тема
      autoClose={5000} // Закривається через 5 секунд
      hideProgressBar={false} // Показувати прогрес-бар
      newestOnTop={false} // нові тости з'являються внизу
      closeOnClick // Закривається при кліку
      pauseOnHover // Пауза при наведенні
      draggable // Можливість перетягування
    />
  );
};

export default Toast;
