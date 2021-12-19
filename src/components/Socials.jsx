import React from "react";
import {
  GitHub,
  Database,
  Send,
  Twitter,
  Instagram,
  Mail,
  Linkedin,
} from "react-feather";

const Icons = {
  github: {
    icon: <GitHub />,
    url: "",
  },
  twitter: {
    icon: <Twitter />,
    url: "",
  },

  instagram: {
    icon: <Instagram />,
    url: "",
  },
  send: {
    icon: <Send />,
    url: "https://t.me/wiwium",
  },
  mail: {
    icon: <Mail />,
    url: "",
  },
  linkedin: {
    icon: <Linkedin />,
    url: "",
  },
};

const Socials = () => {
  return (
    <div className="socials">
      {Object.entries(Icons).map(([key, value]) => (
        <a
          key={key}
          href={value.url}
          target="_blank"
          rel="noopener noreferrer"
          className={"icon " + key}
        >
          {value.icon}
        </a>
      ))}
    </div>
  );
};
export default Socials;
