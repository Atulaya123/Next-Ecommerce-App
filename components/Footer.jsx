import React from "react";
import { AiFillInstagram, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Atulya Vaibhav Rai All rights reserved</p>
      <p className="icons">
        <Link href="https://www.instagram.com/raiatulya">
          <a>
        <AiFillInstagram />
        </a>
        </Link>
        <Link href="https://twitter.com/AtulyaVaibhav">
          <a>
        <AiOutlineTwitter />
        </a>
        </Link>
        <Link href="https://github.com/Atulaya123">
          <a>
            <AiFillGithub />
          </a>
        </Link>
      </p>
    </div>
  );
};

export default Footer;
