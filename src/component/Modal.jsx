import React from "react";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-10">
      <div className="bg-white max-w-[500px] p-5 relative flex flex-col gap-5 z-50 justify-center items-center ">
        <h2 className="text-2xl font-bold text-center">Ini Modal</h2>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          ipsum hic sunt deleniti eum atque voluptate voluptates? Aperiam quidem
          impedit corporis ut eum! Accusantium repellendus necessitatibus
          laudantium placeat error tempora minima quidem eligendi. Veniam
          necessitatibus eligendi expedita voluptas aperiam rem, voluptatibus
          quibusdam. Dignissimos totam consectetur, ab hic quo eos a.
        </div>
        <button
          onClick={onClose}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
