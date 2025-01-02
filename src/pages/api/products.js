export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "Cheese Pizza",
      price: 10,
      image:
        "https://th.bing.com/th/id/OIP.whxJyvOFUxVXA4YjWmy-TwHaE8?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },

    {
      id: 2,
      name: "Veg Italian Pizza",
      price: 8,
      image:
        "https://rookie-chef.com/wp-content/uploads/2014/09/output_ekyotw.gif",
    },

    {
      id: 3,
      name: "Gourmet Pizza",
      price: 9,
      image:
        "https://rookie-chef.com/wp-content/uploads/2014/09/output_csvwwo.gif",
    },

    {
      id: 4,
      name: "Cheese Dog Pizza",
      category: "delight",
      price: 13,
      image:
      "https://th.bing.com/th/id/OIP.xxeDsGOfLxiMSSzvap2JugHaLH?pid=ImgDet&w=184&h=276&c=7&dpr=1.3",
    },

    {
      id: 5,
      name: "Grilled Parmesen Pizza",
      category: "fixing",
      price: 12,
      image:
        "https://th.bing.com/th/id/OIP.8zsxQ53TYvw3Uux3VuQwjgAAAA?rs=1&pid=ImgDetMain",
    },
    {
      id: 6,
      name: "Sausages Pizza",
      category: "family",
      price: 10,
      image:
     "https://th.bing.com/th/id/OIF.0CGQmc0xTv9NK8t9stsUWg?rs=1&pid=ImgDetMain",
    },
  ];

  res.status(200).json(products);
}
