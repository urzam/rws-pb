const translators = [
  {
    id: "1",
    name: "Lisa",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae. Consectetur adipiscing elit pellentesque habitant. Ac tortor dignissim convallis aenean et tortor at. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Vitae tempus quam pellentesque nec. Sit amet tellus cras adipiscing enim. Viverra nibh cras pulvinar mattis nunc sed. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit amet risus. Orci dapibus ultrices in iaculis nunc. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Dignissim convallis aenean et tortor. Non arcu risus quis varius quam quisque. Amet mattis vulputate enim nulla aliquet porttitor.",
    hourlyRate: "20",
    status: "Applicant",
    creditCardNumber: "1234",
    photoUrl: "https://i.pravatar.cc/500?img=1",
    languages: ["English", "Spanish", "French", "Italian"],
  },
  {
    id: "2",
    name: "Jane",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae. Consectetur adipiscing elit pellentesque habitant. Ac tortor dignissim convallis aenean et tortor at. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Vitae tempus quam pellentesque nec. Sit amet tellus cras adipiscing enim. Viverra nibh cras pulvinar mattis nunc sed. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit amet risus. Orci dapibus ultrices in iaculis nunc. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Dignissim convallis aenean et tortor. Non arcu risus quis varius quam quisque. Amet mattis vulputate enim nulla aliquet porttitor.",
    hourlyRate: "30",
    status: "Certified",
    creditCardNumber: "5678",
    photoUrl: "https://i.pravatar.cc/500?img=16",
    languages: ["English", "Spanish", "French"],
  },
  {
    id: "3",
    name: "Sue",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae. Consectetur adipiscing elit pellentesque habitant. Ac tortor dignissim convallis aenean et tortor at. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Vitae tempus quam pellentesque nec. Sit amet tellus cras adipiscing enim. Viverra nibh cras pulvinar mattis nunc sed. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit amet risus. Orci dapibus ultrices in iaculis nunc. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Dignissim convallis aenean et tortor. Non arcu risus quis varius quam quisque. Amet mattis vulputate enim nulla aliquet porttitor.",
    hourlyRate: "40",
    status: "Deleted",
    creditCardNumber: "9012",
    photoUrl: "https://i.pravatar.cc/500?img=5",
    languages: ["English", "Spanish", "French"],
  },
  {
    id: "4",
    name: "Jack",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae. Consectetur adipiscing elit pellentesque habitant. Ac tortor dignissim convallis aenean et tortor at. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Vitae tempus quam pellentesque nec. Sit amet tellus cras adipiscing enim. Viverra nibh cras pulvinar mattis nunc sed. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit amet risus. Orci dapibus ultrices in iaculis nunc. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Dignissim convallis aenean et tortor. Non arcu risus quis varius quam quisque. Amet mattis vulputate enim nulla aliquet porttitor.",
    hourlyRate: "50",
    status: "Applicant",
    creditCardNumber: "3456",
    photoUrl: "https://i.pravatar.cc/500?img=7",
    languages: ["English", "Spanish", "French"],
  },
  {
    id: "5",
    name: "Jill",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae. Consectetur adipiscing elit pellentesque habitant. Ac tortor dignissim convallis aenean et tortor at. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Vitae tempus quam pellentesque nec. Sit amet tellus cras adipiscing enim. Viverra nibh cras pulvinar mattis nunc sed. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit amet risus. Orci dapibus ultrices in iaculis nunc. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Dignissim convallis aenean et tortor. Non arcu risus quis varius quam quisque. Amet mattis vulputate enim nulla aliquet porttitor.",
    hourlyRate: "60",
    status: "Certified",
    creditCardNumber: "7890",
    // photoUrl: "https://i.pravatar.cc/500?img=8",
    languages: ["English", "Spanish"],
  },
  {
    id: "6",
    name: "Joe",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae. Consectetur adipiscing elit pellentesque habitant. Ac tortor dignissim convallis aenean et tortor at. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Vitae tempus quam pellentesque nec. Sit amet tellus cras adipiscing enim. Viverra nibh cras pulvinar mattis nunc sed. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit amet risus. Orci dapibus ultrices in iaculis nunc. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Dignissim convallis aenean et tortor. Non arcu risus quis varius quam quisque. Amet mattis vulputate enim nulla aliquet porttitor.",
    hourlyRate: "70",
    status: "Deleted",
    creditCardNumber: "0123",
    photoUrl: "https://i.pravatar.cc/500?img=9",
    languages: ["English", "Spanish", "French"],
  },
  {
    id: "7",
    name: "Bob",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae. Consectetur adipiscing elit pellentesque habitant. Ac tortor dignissim convallis aenean et tortor at. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Vitae tempus quam pellentesque nec. Sit amet tellus cras adipiscing enim. Viverra nibh cras pulvinar mattis nunc sed. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit amet risus. Orci dapibus ultrices in iaculis nunc. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Dignissim convallis aenean et tortor. Non arcu risus quis varius quam quisque. Amet mattis vulputate enim nulla aliquet porttitor.",
    hourlyRate: "80",
    status: "Applicant",
    creditCardNumber: "4567",
    photoUrl: "https://i.pravatar.cc/500?img=11",
    languages: ["English", "Spanish"],
  },
  {
    id: "8",
    name: "John",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae. Consectetur adipiscing elit pellentesque habitant. Ac tortor dignissim convallis aenean et tortor at. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Vitae tempus quam pellentesque nec. Sit amet tellus cras adipiscing enim. Viverra nibh cras pulvinar mattis nunc sed. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit amet risus. Orci dapibus ultrices in iaculis nunc. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Dignissim convallis aenean et tortor. Non arcu risus quis varius quam quisque. Amet mattis vulputate enim nulla aliquet porttitor.",
    hourlyRate: "90",
    status: "Certified",
    creditCardNumber: "8901",
    photoUrl: "https://i.pravatar.cc/500?img=12",
    languages: ["English", "Spanish", "French"],
  },
];
exports.translators = translators;
