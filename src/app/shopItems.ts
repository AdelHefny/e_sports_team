import p1 from "./Images/p1.jpg";
import p2 from "./Images/p2.jpg";
import p3 from "./Images/p3.jpg";
import p4 from "./Images/p4.jpg";
import p5 from "./Images/p5.png";
import p6 from "./Images/p6.jpg";
import p7 from "./Images/p7.jpg";
import p8 from "./Images/p8.jpg";
import p9 from "./Images/p9.png";
import p10 from "./Images/p10.jpg";
import { productType } from "./cartContext";
export const shopItems: productType[] = [
  {
    id: 0,
    productName: "Atari Black",
    price: 90,
    description:
      "Suspendisse sagittis cursus eros vitae scelerisque. Fusce ultrices dignissim rutrum. Nulla iaculis vitae odio ac volutpat. Fusce lobortis risus et enim blandit tincidunt vitae at ipsum. Nunc id blandit dui. Etiam rhoncus quam sit amet volutpat euismod. Etiam velit erat, ultricies tincidunt ligula sit amet, laoreet finibus risus.",
    img: p1,
    reviews: [
      {
        stars: 4,
        comment: "that hoodi is great",
      },
      {
        stars: 4,
        comment: "",
      },
    ],
    category: ["Clothing", "Hoodies"],
  },
  {
    id: 1,
    productName: "B-HERO PAD",
    price: 15,
    description:
      "Suspendisse sagittis cursus eros vitae scelerisque. Fusce ultrices dignissim rutrum. Nulla iaculis vitae odio ac volutpat. Fusce lobortis risus et enim blandit tincidunt vitae at ipsum. Nunc id blandit dui. Etiam rhoncus quam sit amet volutpat euismod. Etiam velit erat, ultricies tincidunt ligula sit amet, laoreet finibus risus.",
    img: p2,
    reviews: [
      {
        stars: 5,
        comment: "that pad is great",
      },
    ],
    category: ["Accessories", "Music"],
  },
  {
    id: 2,
    productName: "CORSAIR CAT PRO",
    price: 18,
    description:
      "Suspendisse sagittis cursus eros vitae scelerisque. Fusce ultrices dignissim rutrum. Nulla iaculis vitae odio ac volutpat. Fusce lobortis risus et enim blandit tincidunt vitae at ipsum. Nunc id blandit dui. Etiam rhoncus quam sit amet volutpat euismod. Etiam velit erat, ultricies tincidunt ligula sit amet, laoreet finibus risus.",
    img: p3,
    reviews: [],
    category: ["Accessories"],
  },
  {
    id: 3,
    productName: "DAREDEVIL XTREME",
    price: 45,
    discount: 36,
    description:
      "Suspendisse sagittis cursus eros vitae scelerisque. Fusce ultrices dignissim rutrum. Nulla iaculis vitae odio ac volutpat. Fusce lobortis risus et enim blandit tincidunt vitae at ipsum. Nunc id blandit dui. Etiam rhoncus quam sit amet volutpat euismod. Etiam velit erat, ultricies tincidunt ligula sit amet, laoreet finibus risus.",
    img: p4,
    reviews: [
      {
        stars: 3,
        comment: "",
      },
    ],
    category: ["Accessories", "Music"],
  },
  {
    id: 4,
    productName: "ENTERPRISE STINGER",
    price: 25,
    description:
      "Suspendisse sagittis cursus eros vitae scelerisque. Fusce ultrices dignissim rutrum. Nulla iaculis vitae odio ac volutpat. Fusce lobortis risus et enim blandit tincidunt vitae at ipsum. Nunc id blandit dui. Etiam rhoncus quam sit amet volutpat euismod. Etiam velit erat, ultricies tincidunt ligula sit amet, laoreet finibus risus.",
    img: p5,
    reviews: [],
    category: ["Accessories"],
  },
  {
    id: 5,
    productName: "FNATIC SWEATPANTS 2019",
    price: 18,
    discount: 16,
    description:
      "Suspendisse sagittis cursus eros vitae scelerisque. Fusce ultrices dignissim rutrum. Nulla iaculis vitae odio ac volutpat. Fusce lobortis risus et enim blandit tincidunt vitae at ipsum. Nunc id blandit dui. Etiam rhoncus quam sit amet volutpat euismod. Etiam velit erat, ultricies tincidunt ligula sit amet, laoreet finibus risus.",
    img: p6,
    reviews: [
      {
        stars: 5,
        comment: "",
      },
      {
        stars: 3,
        comment: "its great",
      },
    ],
    category: ["Clothing"],
  },
  {
    id: 6,
    productName: "FNATIC VIBRA 300",
    price: 55,
    description:
      "Suspendisse sagittis cursus eros vitae scelerisque. Fusce ultrices dignissim rutrum. Nulla iaculis vitae odio ac volutpat. Fusce lobortis risus et enim blandit tincidunt vitae at ipsum. Nunc id blandit dui. Etiam rhoncus quam sit amet volutpat euismod. Etiam velit erat, ultricies tincidunt ligula sit amet, laoreet finibus risus.",
    img: p7,
    reviews: [
      {
        stars: 5,
        comment: "",
      },
    ],
    category: ["Clothing", "Music"],
  },
  {
    id: 7,
    productName: "FNATIC XTREME 2019",
    price: 65,
    discount: 55,
    description:
      "Suspendisse sagittis cursus eros vitae scelerisque. Fusce ultrices dignissim rutrum. Nulla iaculis vitae odio ac volutpat. Fusce lobortis risus et enim blandit tincidunt vitae at ipsum. Nunc id blandit dui. Etiam rhoncus quam sit amet volutpat euismod. Etiam velit erat, ultricies tincidunt ligula sit amet, laoreet finibus risus.",
    img: p8,
    reviews: [
      {
        stars: 5,
        comment: "",
      },
    ],
    category: ["Accessories"],
  },
  {
    id: 8,
    productName: "KRAKEN X RGB",
    price: 45,
    description:
      "Suspendisse sagittis cursus eros vitae scelerisque. Fusce ultrices dignissim rutrum. Nulla iaculis vitae odio ac volutpat. Fusce lobortis risus et enim blandit tincidunt vitae at ipsum. Nunc id blandit dui. Etiam rhoncus quam sit amet volutpat euismod. Etiam velit erat, ultricies tincidunt ligula sit amet, laoreet finibus risus.",
    img: p9,
    reviews: [],
    category: ["Accessories"],
  },
  {
    id: 9,
    productName: "NAVI HOODIE 2019",
    price: 30,
    description:
      "Suspendisse sagittis cursus eros vitae scelerisque. Fusce ultrices dignissim rutrum. Nulla iaculis vitae odio ac volutpat. Fusce lobortis risus et enim blandit tincidunt vitae at ipsum. Nunc id blandit dui. Etiam rhoncus quam sit amet volutpat euismod. Etiam velit erat, ultricies tincidunt ligula sit amet, laoreet finibus risus.",
    img: p10,
    reviews: [
      {
        stars: 4,
        comment: "",
      },
      {
        stars: 4,
        comment: "",
      },
    ],
    category: ["Clothing", "Hoodies"],
  },
];
