import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./showFeedback.css";

const showFeedback = (message: string, type: "error" | "success"): void => {
  toast[type](message, {
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

export default showFeedback;
