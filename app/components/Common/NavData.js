export const navItems = [
  { label: "Home", href: "/", hasDropdown: false },
    { label: "About Us", href: "/about", hasDropdown: false },
  {
    label: "Products", href: "#", hasDropdown: true, subItems: [
      { label: "Crop Protection", href: "/products/crop-protection" },
      { label: "Insecticide", href: "/products/insecticide" },
      { label: "Fungicide", href: "/products/fungicide" },
      { label: "Herbicide", href: "/products/herbicide" },
      { label: "Seeds", href: "/products/seeds" },
      // { label: "Others", href: "/products/others" },
    ]
  },
  { label: "Career", href: "/career", hasDropdown: false },
  // { label: "Team", href: "/team", hasDropdown: false },


  {
    label: "Media", href: "#", hasDropdown: true, subItems: [
      { label: "Blogs", href: "/blogs" },
      { label: "Gallery", href: "/gallery" },
      { label: "News", href: "/news" },
    ]
  },
  // { label: "Shop", href: "#", hasDropdown: true },
];
