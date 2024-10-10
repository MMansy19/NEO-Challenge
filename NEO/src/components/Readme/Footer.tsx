import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

function FooterComponent() {
  return (
    <footer className="bg-gray-50 p-2  sm:p-6 rounded-2xl">
      <div className="container mx-auto flex flex-col  justify-between items-center gap-4">
        {/* Icons */}
        <div className="flex sm:gap-6 gap-3 sm:text-2xl text-lg">
          <a
            href="https://www.linkedin.com/in/mahmoud-mansy-a189a5232/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/MMansy19/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <BsGithub />
          </a>
          <a
            href="mailto:mahmoud2abdalfattah@gmail.com"
            className="hover:text-red-400 transition-colors duration-300"
          >
            <BsEnvelope />
          </a>
          <a
            href="https://t.me/mah_moud_2003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            <BsTelegram />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=201010352387&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors duration-300"
          >
            <BsWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
