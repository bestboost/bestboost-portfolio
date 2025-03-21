import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button/Button";
import { FaFilePdf } from "react-icons/fa";

const ResumeDownload = () => {
  const [resumeId, setResumeId] = useState(null);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/resume/list"
        ); // Ендпоінт для отримання списку резюме
        if (response.data.length > 0) {
          setResumeId(response.data[0]._id); // Беремо перше резюме з масиву (або додаємо вибір)
        }
      } catch (error) {
        console.error("Помилка при отриманні резюме:", error);
      }
    };

    fetchResume();
  }, []);
//     if (!resumeId) return;

//     try {
//       const response = 
//       // await axios.get(
//       //   `http://localhost:5000/api/resume/download/${resumeId}`,
//       //   {
//       //     responseType: "blob", // Важливо для отримання файлу
//       //   }
//       // );

//       axios.get(`http://localhost:5000/api/resume/download/${resumeId}`, { responseType: 'blob' })
//       .then(response => {
//         const contentDisposition = response.headers['Content-Disposition'];
//         console.log(response.headers);
//       });
    

//    // Отримуємо ім'я файлу з заголовків
//   //  const contentDisposition = response.headers["Content-Disposition"];
  
//    let filename = "resume.pdf"; // Назва за замовчуванням

//   //  if (contentDisposition) {
//   //    const match = contentDisposition.match(/filename="(.+)"/);
//   //    if (match && match[1]) {
//   //      filename = match[1]; // Витягуємо оригінальну назву
//   //    }
//   //  }

//    // Створюємо посилання для завантаження
//    const url = window.URL.createObjectURL(new Blob([response.data]));
//    const link = document.createElement("a");
//    link.href = url;
//    link.setAttribute("download", filename); // Використовуємо оригінальне ім'я
//    document.body.appendChild(link);
//    link.click();
//    link.remove();
//  } catch (error) {
//    console.error("Помилка при завантаженні файлу:", error);
//  }
// };

const handleDownload = async () => {
  if (!resumeId) return;

  try {
    const response = await fetch(`http://localhost:5000/api/resume/download/${resumeId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', // Можна додати інші заголовки за потребою
      },
    });
    // Перевірка статусу відповіді
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Отримуємо заголовок Content-Disposition для визначення імені файлу
    const contentDisposition = response.headers.get('Content-Disposition');
    let filename = "resume.pdf"; // Назва за замовчуванням

    if (contentDisposition) {
      const match = contentDisposition.match(/filename="(.+)"/);
      if (match && match[1]) {
        filename = match[1]; // Витягуємо оригінальну назву
      }
    }

    // Отримуємо вміст файлу як Blob
    const blob = await response.blob();
    
    // Створюємо URL для завантаження файлу
    const url = window.URL.createObjectURL(blob);
    
    // Створюємо посилання для завантаження
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename); // Використовуємо оригінальне ім'я файлу
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Вивільняємо ресурси
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Помилка при завантаженні файлу:", error);
  }
};


  return (
    <Button onClick={handleDownload} disabled={!resumeId}>
      <FaFilePdf style={{ marginRight: "8px" }} /> Download Resume
    </Button>
  );
};

export default ResumeDownload;
