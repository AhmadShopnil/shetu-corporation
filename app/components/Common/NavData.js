export const navItems = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Products", href: "#", hasDropdown: true, subItems: [
    { label: "Crop Protection", href: "/products/crop-protection" },
    { label: "Insecticide", href: "/products/insecticide" },
    { label: "Fungicide", href: "/products/fungicide" },
    { label: "Herbicide", href: "/products/herbicide" },
    { label: "Seeds", href: "/products/seeds" },
    { label: "Others", href: "/products/others" },
  ]},

  { label: "Team", href: "/team", hasDropdown: false },
    { label: "About Us", href: "#", hasDropdown: false },
  { label: "Blogs", href: "#", hasDropdown: false },
  // { label: "Shop", href: "#", hasDropdown: true },
];
