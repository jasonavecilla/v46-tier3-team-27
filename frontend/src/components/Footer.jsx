import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { SiFoodpanda } from "react-icons/si";
const Footer = () => {
  return (
    <div className="py-2 bg-neutral text-neutral-content">
      <footer className="p-10 footer footer-center bg-neutral text-neutral-content ">
        <aside>
          <a
            href="https://github.com/chingu-voyages/v46-tier3-team-27"
            target="_blank"
            rel="noreferrer"
          >
            <SiFoodpanda className="w-16 h-16" />
          </a>

          <p className="font-bold">
            Secret Recipes Chingu.io <br />
            Providing healthy recipes since acient times
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/chingu-voyages/v46-tier3-team-27"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="w-8 h-8" />
            </a>
            <a>
              <AiFillTwitterCircle className="w-8 h-8" />
            </a>
            <a>
              <AiFillFacebook className="w-8 h-8" />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
