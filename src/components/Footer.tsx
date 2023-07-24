import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-waterWhite p-5 justify-center flex flex-col items-center">
      <Image src="/logo.svg" width={133} height={23} alt="Full Stack Week" />
      <p className="text-sm mt-1 font-semibold text-primaryDarker">
        Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
