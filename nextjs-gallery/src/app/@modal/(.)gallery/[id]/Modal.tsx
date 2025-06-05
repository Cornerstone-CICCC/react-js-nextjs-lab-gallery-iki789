"use client";
import Link from "next/link";

type Props = {
  id?: string;
  children: React.ReactNode;
};

const Modal = ({ id, children }: Props) => {
  if (!id) {
    return null;
  }
  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/70 flex items-center justify-center">
      <div className="bg-white text-black p-3 w-xl">
        <div className="flex justify-center items-center">{children}</div>
        <div>
          <Link href="/gallery">Close</Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
