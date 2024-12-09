import InstagramIcon from "../_svgs/instagramIcon.svg";
import Behance from "../_svgs/Behance.svg";
import InIcon from "../_svgs/inIcon.svg";
import FacebookIcon from "../_svgs/facebookIcon.svg";

const SocialMediaLinks = () => {
  const links = [
    { href: "https://www.instagram.com/lorikzek/", icon: <InstagramIcon /> },
    { href: "https://www.behance.net/lorikzz", icon: <Behance /> },
    {
      href: "https://www.linkedin.com/in/lorik-zekaj-567709183",
      icon: <InIcon />,
    },
    { href: "https://www.facebook.com/lorikzz", icon: <FacebookIcon /> },
  ];

  return (
    <div className="flex gap-x-3">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-customColor rounded-full h-10 w-10 flex justify-center items-center cursor-pointer"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
