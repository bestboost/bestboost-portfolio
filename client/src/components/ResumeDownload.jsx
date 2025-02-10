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

  const handleDownload = async () => {
    if (!resumeId) return;

    try {
      const response = await axios.get(
        `http://localhost:5000/api/resume/download/${resumeId}`,
        {
          responseType: "blob", // Важливо для отримання файлу
        }
      );

      // Створюємо посилання для завантаження
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "resume.pdf"); // Назва файлу
      document.body.appendChild(link);
      link.click();
      link.remove();
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
