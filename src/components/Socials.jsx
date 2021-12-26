import React from "react";
import {
  GitHub,
  Database,
  Send,
  Twitter,
  Instagram,
  Mail,
  Linkedin,
  Layers,
} from "react-feather";

const Icons = {
  github: {
    icon: <GitHub />,
    url: "https://github.com/ketan-10",
  },
  twitter: {
    icon: <Twitter />,
    url: "https://twitter.com/ketanch41947933",
  },
  // send: {
  //   icon: <Send />,
  //   url: "https://t.me/wiwium",
  // },
  stackoverflow: {
    icon: <Layers/>,
    url: "https://stackoverflow.com/users/10066692/ketan-chaudhari",
  },
  instagram: {
    icon: <Instagram />,
    url: "https://www.instagram.com/ketan.chaudhari.1998/",
  },
  mail: {
    icon: <Mail />,
    url: "mailto:ketanchaudhari1998@gmail.com",
  },
  linkedin: {
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/ketan-chaudhari-063233150/",
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
