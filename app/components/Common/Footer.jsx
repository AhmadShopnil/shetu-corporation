

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import Link from "next/link";
import { getSettings } from "@/lib/fetchApis";
import { getMediaLinkByMetaName, getMetaValueByMetaName } from "@/utils/metaHelpers";
import { BASE_URL } from "@/lib/baseUrl";

const Footer = async () => {
  const settings = await getSettings();

  const phone = getMetaValueByMetaName(settings, "company_phone") || "";
  const company_phone_2_Fax = getMetaValueByMetaName(settings, "company_phone_2") || "";
  const slogan = getMetaValueByMetaName(settings, "slogan") || "";

  const company_email = getMetaValueByMetaName(settings, "company_email") || "";
  const facebookLink = getMetaValueByMetaName(settings, "facebook_url") || "#";
  const linkedinLink = getMetaValueByMetaName(settings, "linkedin_url") || "#";
  const instagramLink =
    getMetaValueByMetaName(settings, "instagram_url") || "#";
  const location = getMetaValueByMetaName(settings, "office_location") || "";

  const footer_logo_path = getMediaLinkByMetaName(settings, "footer_logo");
  const footer_logo_url = `${BASE_URL}${footer_logo_path}`;

  const website_logo_path = getMediaLinkByMetaName(settings, "site_logoimg_id");
  // const website_logo_url = `${BASE_URL}${website_logo_path}`;
  const website_logo_url = `https://www.shetu.mathmozo.com/${website_logo_path}`;
  const website_title_footer = getMetaValueByMetaName(settings, "website_title");
  const site_name = getMetaValueByMetaName(settings, "site_name");
  const footer_content =
    getMetaValueByMetaName(settings, "bottom_footer_content") || "";

  // console.log("website_logo_url", website_logo_url)


  return (
    <footer className="relative pt-10 md:pt-24 pb-14 overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer.jpeg"
          alt="footer-bg"
          fill
          className="object-cover"
        />

        {/* Soft green overlay */}
        <div className="absolute inset-0 bg-gray-800/50"></div>

        {/* Smooth gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-800/20 via-green-900/30 
        to-green-950/50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* Logo + Contact */}
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1">
              <Image
                src={website_logo_url}
                alt="Shetu Corporation Logo"
                width={65}
                height={65}
                priority
              />
              <span className="text-base uppercase font-bold  text-white">
                {site_name}
              </span>
            </Link>

            <div className="space-y-4 mt-3">
              <p className="flex items-center gap-3 text-[15px] md:text-base text-white">
                <span className="w-10 h-10 rounded-full  flex items-center 
                justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </span>
                {/* +880-2-7913081 */}
                {phone}
              </p>

              <p className="flex items-center gap-3 text-[15px] md:text-base text-white">
                <span className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </span>
                {company_email}
              </p>

              <p className="flex items-center gap-3 text-[15px] md:text-base text-white">
                <span className="w-10 h-10 rounded-full  flex items-center justify-center">
                  <FaX className="w-4 h-4 text-white" />
                </span>
                {company_phone_2_Fax}
                {/* Fax: +880-2-8829262, 7913085 */}
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center gap-2">

              Our Products
            </h4>

            <ul className="space-y-3">
              {[
                { label: "Crop Protection", href: "/products/crop-protection" },
                { label: "Insecticide", href: "/products/insecticide" },
                { label: "Fungicide", href: "/products/fungicide" },
                { label: "Herbicide", href: "/products/herbicide" },
                { label: "Seeds", href: "/products/seeds" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[15px] md:text-base text-white hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-white">↗</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media */}
          <div>
            <h4 className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center gap-2">

              Media
            </h4>

            <ul className="space-y-3">
              {[
                { label: "Blogs", href: "/blogs" },
                { label: "Gallery", href: "/gallery" },
                { label: "News", href: "/news" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-[15px] md:text-base text-white hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-white">↗</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4 className="text-xl lg:text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-primary rounded-full"></span>
              Newsletter
            </h4>

            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-5 py-3 rounded-l-full bg-white/10 border border-white/20 text-white text-base placeholder:text-white focus:outline-none focus:border-primary"
              />
              <button className="px-5 py-3 rounded-r-full bg-[#8ACB1A] hover:bg-[#7AB316] transition cursor-pointer">
                <span className="text-white">→</span>
              </button>
            </div>

            <p className="text-[15px] md:text-base text-white mb-6 leading-relaxed">
              {slogan}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 text-center">
          <div
            className="text-[15px] text-white"
            dangerouslySetInnerHTML={{ __html: footer_content }}
          />

        </div>
      </div>
    </footer>
  );
};

export default Footer;