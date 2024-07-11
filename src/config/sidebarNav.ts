const sidebarNav = [
  {
    link: "/",
    section: "",
    icon: "lucide:layout-dashboard", //width:"20"
    text: "داشبورد",
  },
  {
    icon: "lucide:layout-dashboard", //width:"20"
    text: "ثبت پیوست",
    subLinks: [
      { link: "/add-assessment1", section: "add-assessment1", text: "1 پیوست" },
      { link: "/add-assessment2", section: "add-assessment2", text: "2 پیوست" },
    ],
  },
  {
    link: "/patients",
    section: "patients",
    icon: "lucide:layout-dashboard", //width:"20"
    text: "بیماران",
  },
  // {
  //   link: "/products",
  //   section: "products",
  //   icon: "icon-park-outline:ad-product",
  //   text: "Products",
  // },
  // {
  //   link: "/customers",
  //   section: "customers",
  //   icon: "ph:users-bold",
  //   text: "Customers",
  // },
  // {
  //   link: "/orders",
  //   section: "orders",
  //   icon: "icon-park-outline:transaction-order",
  //   text: "Orders",
  // },
  // {
  //   link: "/analytics",
  //   section: "analytics",
  //   icon: "carbon:analytics",
  //   text: "Analytics",
  // },
  // {
  //   link: "/discount",
  //   section: "discount",
  //   icon: "nimbus:discount-circle",
  //   text: "Discount",
  // },
  // {
  //   link: "/inventory",
  //   section: "inventory",
  //   icon: "ic:round-inventory",
  //   text: "Inventory",
  // },
];

export default sidebarNav;
