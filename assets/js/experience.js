AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "IEEE Ambassdor",
    cardImage: "assets/images/experience-page/IEEE.png",
    place: "XTREME 17.0",
    time: "(2023 - 2024)",
    desp: "<li>Organized 10+ IEEE events, boosting student participation by 30%.</li> <li>Presented technical concepts to 500+ individuals, increasing audience engagement by 25%.</li> <li>Established partnerships with 5 industry leaders and 3 academic institutions, leading to 7 collaborative projects.</li>",
  },
  {
    title: "ED-CELL CO-ORDINATOR",
    cardImage: "assets/images/experience-page/KL.png",
    place: "RangaReddy,Telangana",
    time: "(2022-2025)",
    desp: "<li> Planned and coordinated entrepreneurship workshops, seminars, and competitions.</li><li> Facilitated connections between students and industry mentors for guidance.</li><li>Managed resources and supported for student startups and entrepreneurial activities.</li>",
  },
 
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Rama Krishna Math",
    cardImage: "assets/images/experience-page/rk.png",
    description:
      "Provided support and assistance in various social, educational, and healthcare activities to uplift and serve the community.",
  },
  {
    title: "Isckon",
    cardImage: "assets/images/experience-page/is.png",
    description:
      "Supported and participated in ISKCON's community outreach programs, including food distribution, educational initiatives, and spiritual guidance.",
  },
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "IIIT HYDERABAD HACKATHON",
    subtitle: "",
    image: "assets/images/experience-page/me.png",
    desp: "I was the runner-up in a competition at IIIT for developing a satellite-based paddy irrigation system.",
    href: "https://drive.google.com/file/d/16tOra5ApHcFRi985EJ4GH3RAIVn4x-HE/view?usp=sharing",
  },
  

  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
