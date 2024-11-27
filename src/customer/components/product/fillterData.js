
export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "small", label: "S", checked: false },
      { value: "medium", label: "M", checked: false },
      { value: "large", label: "L", checked: true },
      { value: "XL", label: "XL", checked: true }

    ],
  },
  {
    id: "price",
    name: "Price",
    options: [
      { value: "1_30", label: "1_300$", checked: false },
      { value: "1_300", label: "100-300$", checked: false },
      { value: "3_600", label: "300-600$", checked: false },
      { value: "300_6000000", label: "300-6000$", checked: false },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% and above", checked: false },
      { value: "20", label: "20% and above", checked: false },
      { value: "30", label: "30% and above", checked: false },
      { value: "40", label: "40% and above", checked: false },
      { value: "50", label: "50% and above", checked: false },
      { value: "60", label: "60% and above", checked: false },
      { value: "70", label: "70% and above", checked: false },
      { value: "80", label: "80% and above", checked: false },
      { value: "90", label: "90% and above", checked: false },
    ],
  },{
    id: "availability",
    name: "Availability",
    options: [
      { value: "2l", label: "In Stock", checked: false },
      { value: "6l", label: "Out Of Stock", checked: false },
    ],
  }
];
export const sortOptions = [
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
