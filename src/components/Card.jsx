import React from "react";

// import image
import qr from "../assets/image-qr-code.png";

const Card = () => {
  return (
    <section className="max-w-[450px] w-full py-7 px-8 lg:px-0">
      {/* this card */}
      <div className="bg-whiteHSL rounded-2xl shadow-xl">
        <div className="p-4 flex flex-col gap-y-5">
          {/* card image */}
          <div>
            <img className="rounded-xl" src={qr} alt="" />
          </div>
          <div className="flex-1 flex flex-col mx-auto text-center px-9 gap-y-5 pb-10">
            {/* card title */}
            <h1 className="text-2xl font-bold lg:text-3xl text-darkBlue">Improve your front-end skills by building projects</h1>
            {/* card paragraf */}
            <p className="text-blueColr font-normal lg:text-lg text-base">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
