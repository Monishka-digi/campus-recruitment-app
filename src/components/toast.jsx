import { toast } from "react-toastify";

const toastOptions = {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export function showAlert(type, msg) {
  // Call the appropriate toast function based on the type
  switch (type) {
    case "success":
      toast.success(`${msg}`, toastOptions);
      break;
    case "error":
      toast.error(`${msg}`, toastOptions);
      break;
    case "info":
      toast.info(`${msg}`, toastOptions);
      break;
    default:
    //   console.error(`Invalid toast type: ${type}`);
      break;
  }
}

// Usage:
// Call the showAlert function with type and msg arguments
showAlert("loading", "🦄 Checking form validation");

