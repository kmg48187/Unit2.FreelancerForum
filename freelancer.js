const names = ["Alice", "Bob", "Carol", "Dylan", "Edward", "Fran",  "George", "Henry", "Ike", "Josh", "Kristen", "Lucy", "Mike", "Noah"];
const occupations = ["Writer", "Lawyer", "Accountant", "Doctor", "Monster_Hunter", "Government_Agent", "Truck_Driver", "Librarian", "Dog_Walker", "Gardener", "Keyboard_Player", "Pastry_Chef", "Engineer", "Insurance_Agent", "Trombonist"];  
const startingPrices = [20,30,40,50,55,60,65,70,75,80,85,90,95,100];
const maxFreelancers = 10;
const freelancers = [
    {name: "Alice",
     occupation: "Writer",
     startingPrice: 30,  
     },
     {name: "Bob",
      occupation: "Teacher",
      startingPrice: 50,
     },
];
function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
  
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];

    const startingPrice = startingPrices[Math.floor(Math.random() * startingPrices.length)];

    if (freelancers.length < maxFreelancers){freelancers.push({name, occupation, startingPrice})}
    console.log (freelancers)
}
function render() {
    const freelancerList = document.querySelector("#freelancers");
    const freelancerElements = freelancers.map((freelancer) => {
      const freelancerElement = document.createElement("li");
      freelancerElement.classList.add(freelancer.name, freelancer.occupation, freelancer.startingPrice,);
      return freelancerElement;
    });
    freelancerList.replaceChildren(...freelancerElements);
}

function priceSum (){
    let total = 0;
    for(let i = 0; i < freelancers.length; i++)
    {total += freelancers.startingPrice[i];};
    console.log (total);
}

const addFreelancerIntervalId = setInterval(() => {
    addFreelancer();
    priceSum();
    render();
    }, 1000);
  
  render();