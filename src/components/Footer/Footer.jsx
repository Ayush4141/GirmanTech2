import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="h-[600px] md:h-[200px] px-2 bg-[#000000] flex flex-col md:flex-row px-8  py-4 items-center">
      <div className="w-full  md:w-1/3 h-1/3 md:h-full">
        <h2 className="text-[#87A8FF] mb-2">Contact</h2>
        <div className="text-[#EAEAEA] text-sm">
          <p className="py-1">7760560137, 8123259095</p>
          <p className="">girish@girmantech.com</p>
          <p>manish@girmantech.com</p>
          <p className="mt-2 text-xs text-[#DAF5FF]">© 2024 — Copyright</p>
        </div>
      </div>
      <div className="w-full md:w-1/3  h-1/3 md:h-full">
        <h2 className="text-[#0075FF] mb-2 pb-2"> ADDRESS</h2>
        <div className="text-[#EAEAEA]">Girman Technologies Pvt. Ltd. B-0708, BRIGADE NORTHRIDGE, PHASE-1, Sy No 108/2, Yelahanka Bangalore - 560064</div>
        <div>
          <p className="mt-4 pt-1 text-xs text-[#DAF5FF]">
            Girman Technologies Pvt. Ltd.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/3 h-1/3 md:h-full">
      <h2 className="text-[#0075FF] mb-2 pb-2"> FOLOW US</h2>
        <div className="flex flex-row text-[#EAEAEA]">
          <div className="w-12 h-12  rounded-full border-[1px] border-[#4765CF] mx-2 flex justify-center items-center">
            <FaInstagram size={24} />
          </div>
          <div className=" w-12 h-12 bg-transparent rounded-full border-[1px] border-[#4765CF] mx-2 flex justify-center items-center">
            <FaWhatsapp size={24} />
          </div>
          <div className="w-12 h-12 bg-transparent rounded-full border-[1px] border-[#4765CF] mx-2 flex justify-center items-center">
            <FaTwitter size={24} />
          </div>
          <div className="w-12 h-12 bg-transparent rounded-full border-[1px] border-[#4765CF] mx-2 flex justify-center items-center">
            <FaLinkedinIn size={24} />
          </div>
        </div>
        <p className="mt-6 pt-1 text-xs text-[#DAF5FF]">
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
