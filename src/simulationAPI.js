import Avatar_1 from "./img/user_1.png";
import Avatar_2 from "./img/user_2.png";

var Jan25_2021 = new Date(2021, 0, 25);
var Jan28_2021 = new Date(2021, 0, 28);

const roomReservedData = {
  number: 1,
  price: {
    byDay: 9900,
    service: 2485,
    discountService: 2485,
    additionalService: 300,
  },
  dates: { start: Jan25_2021, end: Jan28_2021 },
  guests: { adult: 2, children: 1, babies: 1 },
};

const dataExample = ["comfort", "convenience", "cosiness"];

const exampleDonut = () => {
  const countReviews = getRandomInt(900);
  const great = getRandomInt(countReviews);
  const good = getRandomInt(countReviews - great);
  const acceptable = getRandomInt(countReviews - great - good);
  const bad = countReviews - great - good - acceptable;

  return { great, good, acceptable, bad };
};

const reviewsExample = [
  {
    user: { name: "Murad Saraphanov", avatar: Avatar_1 },
    ageReview: 5,
    likeCount: 12,
    text:
      "Gorgeous mattress on the bed in the master bedroom! And the ottoman is amazing. And the walls are really noise-canceling. He shouted compliments to the cook — no one complained from the neighbors.",
  },
  {
    user: { name: "Patricia Steklishkova", avatar: Avatar_2 },
    ageReview: 7,
    likeCount: 2,
    text:
      "The service is excellent! Everything is neat and clean. I advise you to order breakfast in the room, every day a new dish and dessert as a compliment.",
  },
];


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

function createRandomData() {
  let counters = [];
  let data = [];

  const countElements = getRandomInt(120);

  for (let i = 0; i < countElements; i++) {
    counters.push(i);
  }

  const setNumber = new Set(counters);

  const isUniq = (index) => {
    return setNumber.delete(index);
  };

  for (let i = 0; i < countElements; i++) {
    let number;

    do {
      number = getRandomInt(countElements);
    } while (isUniq());

    data.push({
      number: number,
      price: getRandomInt(900),
      rating: getRandomInt(5),
      //TODO: Will make refactoring for universal solution
      roomInformation: dataExample,
      reviews: {
        counts: exampleDonut(),
        values: reviewsExample,
      },
      roomReservedData: roomReservedData,
    });
  }

  return data;
}

export const testData = createRandomData();