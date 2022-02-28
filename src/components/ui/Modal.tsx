import { useState } from "react";

interface Props {
  modal: boolean;
  setModal: Function;
}

const Modal = ({ modal, setModal }: Props) => {
  console.log(modal);
  return (
    <div
      className={`${
        modal
          ? "fixed z-[50] top-0 left-0 w-full h-full bg-black opacity-75"
          : "hidden"
      }`}
      onClick={() => setModal(false)}
    ></div>
  );
};

export default Modal;
