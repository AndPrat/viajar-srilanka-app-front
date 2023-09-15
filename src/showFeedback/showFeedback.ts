import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./showFeedback.css";

const showFeedback = (message: string, type: "error" | "success"): void => {
  toast[type](message, {
    position: "top-center",
  });
};

export default showFeedback;
