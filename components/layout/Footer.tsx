import Link from "next/link";

import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import Container from "../ui/Container";

import { footer } from "@/data/footer";
import FooterColumn from "../ui/FooterColumn";

const iconMap = {
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  facebook: FaFacebook,
  youtube: FaYoutube,
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <Container>
        <div className="py-20">

          <div className="grid gap-12 lg:grid-cols-5">

            {/* Logo */}

            <div className="lg:col-span-2">

              <h2 className="text-3xl font-bold text-white">

                Accredian

              </h2>

              <p className="mt-5 leading-8">

                {footer.description}

              </p>

              <div className="mt-8 flex gap-4">

                {footer.socials.map((social) => {

                  const Icon = iconMap[social.icon];

                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="
                        rounded-full
                        bg-slate-800
                        p-3
                        transition
                        hover:bg-blue-600
                      "
                    >
                      <Icon size={18} />
                    </Link>
                  );

                })}
              </div>

            </div>

            {/* Quick Links */}

            <FooterColumn
              title="Quick Links"
              items={footer.quickLinks}
            />

            <FooterColumn
              title="Solutions"
              items={footer.solutions}
            />

            <FooterColumn
              title="Company"
              items={footer.company}
            />

          </div>

          <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col gap-3 md:flex-row md:justify-between">

            <p>

              © 2026 Accredian Enterprise. All rights reserved.

            </p>

            <div>

              {footer.contact.email}

            </div>

          </div>

        </div>
      </Container>
    </footer>
  );
}