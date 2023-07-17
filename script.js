const reviews = [
  {
    id: 1,
    name: "Khabib Nurmagomedov",
    job: "UFC Fighter",
    img: "assets/pfp-1.webp",
    text: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Nostrum Corrupti Explicabo Mollitia Necessitatibus Quo Aspernatur, A Obcaecati Est Voluptate, Perferendis, Veniam Nostrum Corrupti Explicabo",
  },
  {
    id: 2,
    name: "Elon Musk",
    job: "Entrepreuner",
    img: "https://i2-prod.mirror.co.uk/incoming/article2160876.ece/ALTERNATES/s615b/Tesla-electric-car-inventor-Elon-Musk.jpg",
    text: "Now is the winter of our discontent Made glorious summer by this sun of York And all the clouds that lour'd upon our house In the deep bosom of the ocean buried. Now are our brows ",
  },
  {
    id: 3,
    name: "Vladimir Putin",
    job: "Russian President",
    img: "https://png.pngitem.com/pimgs/s/118-1188057_putin-meme-vladimir-putin-goggles-hd-png-download.png",
    text: "Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls deified among Veniam Nostrum Corrupti Explicab the tiers of shipping and the waterside pollutions of ",
  },
  {
    id: 4,
    name: "Kevin Hart",
    job: "Comedian, Actor",
    img: "https://d1kq2dqeox7x40.cloudfront.net/images/news_uploads/legacy/0/118187.jpg?h=225&w=375",
    text: "yes and those handsome Moors all in white and turbans like kings asking you to sit down in their little bit of a shop and Ronda with the old windows of the wineshops half open ",
  },
  {
    id: 5,
    name: "Robert Oppenhimer",
    job: "Creator Atom Bomb",
    img: "https://images.ctfassets.net/3m6gg2lxde82/4vbCsqWLPILB0SCAacyw6C/0ace3f535a2b8f7c7123a9d1bb130139/oppenheimer.jpg?w=2048&h=1137&fit=fill&f=faces&q=90&fm=webp",
    text: "It is Spring, moonless night in the small town, starless and bible-black, the cobblestreets silent and the hunched, courters'-and- rabbits' wood limping invisible down to the sloeblack, slow, black, crowblack,",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".left-arrow");
const nextBtn = document.querySelector(".right-arrow");
const randomBtn = document.querySelector(".button");

let currItem = 0;
const size = reviews.length;
window.addEventListener("DOMContentLoaded", () => {
  showPerson(currItem);
});

function showPerson(person) {
  const item = reviews[person];
  console.log(item.img);
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", () => {
  currItem = (currItem + 1) % size;
  showPerson(currItem);
});

prevBtn.addEventListener("click", () => {
  if (currItem == 0) {
    currItem = 4;
  } else {
    currItem = currItem - 1;
  }
  showPerson(currItem);
});

randomBtn.addEventListener("click", () => {
  let val = Math.floor(Math.random()*100); 
  currItem = val%size; 
  showPerson(currItem); 
});
