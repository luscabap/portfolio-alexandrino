import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import { v4 as uuidv4 } from "uuid";

const iconProps = {
  size: 40,
};

export const data = [
  {
    id: uuidv4(),
    url: "https://www.instagram.com/alexandrinoalvesneto/",
    icon: <FaInstagram {...iconProps} />,
  },
  {
    id: uuidv4(),
    url: "https://api.whatsapp.com/send/?phone=%2B5586994185549&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es%20sobre+seus+servi%C3%A7os.&type=phone_number&app_absent=0",
    icon: <FaWhatsapp {...iconProps} />,
  },
];
