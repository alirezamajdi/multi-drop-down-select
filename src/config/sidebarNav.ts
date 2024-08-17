const sidebarNav = [
  {
    link: "/",
    section: "",
    icon: "lucide:layout-dashboard", //width:"20"
    text: "داشبورد",
  },
  {
    link: "/patients",
    section: "patients",
    icon: "lucide:layout-dashboard", //width:"20"
    text: "بیماران",
  },
  {
    icon: "lucide:layout-dashboard", //width:"20"
    text: "ثبت پیوست",
    subLinks: [
      {
        link: "/add-assessment1",
        section: "add-assessment1",
        text: "پیوست" + " ۱",
      },
      {
        link: "/add-assessment2",
        section: "add-assessment2",
        text: "پیوست" + " ۲",
      },
      {
        link: "/add-assessment3",
        section: "add-assessment3",
        text: "پیوست" + " ۳",
      },
      {
        link: "/add-assessment4",
        section: "add-assessment4",
        text: "پیوست" + " ۴",
      },
      {
        link: "/add-assessment5",
        section: "add-assessment5",
        text: "پیوست" + " ۵",
      },
      {
        link: "/add-assessment6",
        section: "add-assessment6",
        text: "پیوست" + " ۶",
      },
    ],
  },

  {
    icon: "lucide:layout-dashboard", //width:"20"
    text: "تماس ها",
    subLinks: [
      {
        link: "/today-calls",
        section: "today-calls",
        text: "تماس های امروز",
      },
      {
        link: "/missed-calls",
        section: "missed-calls",
        text: "تماس های گرفته نشده",
      },
    ],
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
