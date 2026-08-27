import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Modal = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <div>
      <h2>Hello from Modal!</h2>
    </div>,
    modalRoot,
  );
};

export default Modal;
