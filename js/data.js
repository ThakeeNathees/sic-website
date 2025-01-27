// The Destination class definition.
class Event {

  constructor(name, card_image, location, description, link="https://www.instagram.com/socialimpact_curtin/") {
    this.name = name;
    this.card_image = card_image;
    this.location = location;
    this.description = description;
    this.link = link;
  }
}


// Our team detail used at the about us page.
const BOARD_MEMBERS = [
  {
    "name"      : "Yasiru Fernando",
    "image_name": "yasiru.jpg",
    "job_title" : "President",
    "about"     : "A creative and driven individual passionate about fostering collaboration, empowering communities, and driving meaningful change, with a strong background in leadership, engineering, and social impact initiatives.",
  },
  {
    "name"      : "Hirusa Lastname",
    "image_name": "hirusa.jpg",
    "job_title" : "Vice President",
    "about"     : "I don't know what to write so, lorem ipsum dolor sit amet ewsto lanri alie",
  },
  {
    "name"      : "Siluni Something",
    "image_name": "siluni.jpg",
    "job_title" : "Secretary",
    "about"     : "Siluni is a very talented individual, (She asked me to write this).",
  },
  {
    "name"      : "Thakee Nathees",
    "image_name": "thakee.jpg",
    "job_title" : "Treasurer",
    "about"     : "Hi, I designed this page and they didn't even pay me for it. Imma sue them.",
  },
];

EVENTS = [
  new Event(
    "Arduino Workshop",
    "./res/photos/st.claires.JPEG",
    "St. CLaire's College, Wellawaththa",
    "Introducing young minds to programming and robotics through hands-on workshops at St. Clare's School, empowering the next generation of innovators!",
    "https://www.instagram.com/p/DFGB5CxhVQf/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  ),
  new Event(
    "Orphanage Visit 2",
    "./res/photos/orphanage2.jpg",
    "Shilpa Child Development Center",
    "Spreading Christmas joy and creativity at the Shilpa Child Development Center through decorations, crafts, and gifts, making it a magical day for the kids!",
    "https://www.instagram.com/p/DEPgH9ZPzoZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  ),
  new Event(
    "Elder's Home Visit 3",
    "./res/photos/eldersvisit3.jpg",
    "Agham Care Home",
    "Bringing joy and warmth to the elders at Agham Care Home through heartfelt connections and meaningful moments.",
    "https://www.instagram.com/p/DCPQ6J2zvlE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  ),
  new Event(
    "Orphenage Visit",
    "./res/photos/commitee.jpg",
    "Vihara Maha Devi Park",
    "Creating joy and wonder with the children of Shilpa Orphanage through an unforgettable day of exploration and togetherness!",
    "https://www.instagram.com/p/DA3v3kZzPrq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  ),
  new Event(
    "Elder Home Visit",
    "./res/photos/elder-home-visit.jpg",
    "The plance name",
    "eade corporis, hic dolorem dicta ab iure qui architecto, vel obcaecati et quas ducimus. Dignissimos, neque.",
    "https://www.instagram.com/p/DCPQ6J2zvlE/?img_index=1",
  ),
  new Event(
    "Beach Cleanup",
    "./res/photos/beach-cleanup.png",
    "Some beach ofc",
    "eade corporis, hic dolorem dicta ab iure qui architecto, vel obcaecati et quas ducimus. Dignissimos, neque.",
    "https://www.instagram.com/p/C-5qugtSmUw/?img_index=2",
  ),
  new Event(
    "Committee Meeting",
    "./res/photos/barista-meeting.jpg",
    "Barista, Union Place",
    "eade corporis, hic dolorem dicta ab iure qui architecto, vel obcaecati et quas ducimus. Dignissimos, neque.",
    "https://www.instagram.com/p/DAGS_2AoLk5/?img_index=1",
  ),
  new Event(
    "I don't know",
    "./res/photos/school-event.png",
    "Some School",
    "eade corporis, hic dolorem dicta ab iure qui architecto, vel obcaecati et quas ducimus. Dignissimos, neque.",
    "https://www.instagram.com/p/C_gMqRYzijo/?img_index=1",
  ),
  
];