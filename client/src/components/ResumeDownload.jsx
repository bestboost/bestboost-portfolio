import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button/Button";
import { FaFilePdf } from "react-icons/fa";

const API_URL = process.env.REACT_APP_API_URL;

const ResumeDownload = () => {
  const [resumeId, setResumeId] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Стан для спінера

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/resume/list`);
        if (response.data.length > 0) {
          setResumeId(response.data[0]._id);
        }
      } catch (error) {
        console.error("Помилка при отриманні резюме:", error);
      }
    };

    fetchResume();
  }, []);

  const handleDownload = async () => {
    if (!resumeId) return;

    setIsLoading(true); // Увімкнути спінер

    try {
      const response = await fetch(
        `${API_URL}/api/resume/download/${resumeId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentDisposition = response.headers.get("Content-Disposition");
      let filename = "resume.pdf";

      if (contentDisposition) {
        const match = contentDisposition.match(/filename="(.+)"/);
        if (match && match[1]) {
          filename = match[1];
        }
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Помилка при завантаженні файлу:", error);
    } finally {
      setIsLoading(false); // Вимкнути спінер
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={!resumeId || isLoading}
      isLoading={isLoading}
    >
      <FaFilePdf style={{ marginRight: "8px" }} /> Download Resume
    </Button>
  );
};

export default ResumeDownload;
