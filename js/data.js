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
    "about"     : "Hi, I'm MR. Potato Head, an evil genious, I'm here to take over the world.",
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
    "Orphenage Visit",
    "./res/photos/commitee.jpg",
    "Vihara maha devi park",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur adipisci commodi consequuntur totam in itaqu.",
    "https://www.instagram.com/p/DA3v3kZzPrq/?img_index=1",
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