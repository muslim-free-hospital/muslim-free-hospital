const BASE_URL =
  "https://script.google.com/macros/s/AKfycbx5AMll4dgd5020rkdm0TnUYraMTpF7mB-eJJll5nFGyDBhZhGiNhAJpH8uEDBjP4Zu";
const services = {
  teeth: {
    title: "Dentistry",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  cardiovascular: {
    title: "Cardiology",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  ear: {
    title: "ENT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  bone: {
    title: "Astrology",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  lung: {
    title: "Neurology",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  cell: {
    title: "Blood Screening",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
};

const galleries = {
  ONE: "/img/gallery/gallery1.png",
  TWO: "/img/gallery/gallery2.png",
  THREE: "/img/gallery/gallery3.png",
  FOUR: "/img/gallery/gallery4.png",
  FIVE: "/img/gallery/gallery5.png",
  SIX: "/img/gallery/gallery6.png",
};

const doctors = {
  DOCTOR_ONE: {
    name: "Dr. John Doe",
    speciality: "Cardiologist",
    image: "/img/gallery/team1.png",
  },
  DOCTOR_TWO: {
    name: "Dr. John Doe",
    speciality: "Cardiologist",
    image: "/img/gallery/team2.png",
  },
  DOCTOR_THREE: {
    name: "Dr. John Doe",
    speciality: "Cardiologist",
    image: "/img/gallery/team3.png",
  },
};

const navbar = {
  HOME: "home",
  ABOUT: "about",
  SERVICES: "services",
  DOCTORS: "doctors",
  CONTACT: "contact",
  BLOG: "blog",
};

export { navbar, services, galleries, doctors, BASE_URL };
