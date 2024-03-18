const animals = [
  {
    name: "Lion",
    species: "Panthera leo",
    capabilities: ["Strength", "Speed", "Roaring"],
    origin: "Africa",
    lifespan: 10,
    sleeping: false,
    image: "assets/lion.jpg",
  },
  {
    name: "Dolphin",
    species: "Delphinidae",
    capabilities: ["Swimming", "Communication", "Echolocation"],
    origin: "Worldwide",
    lifespan: 20,
    sleeping: false,
    image: "assets/dolphin.jpg",
  },
  {
    name: "Eagle",
    species: "Aquila chrysaetos",
    capabilities: ["Flight", "Keen Eyesight", "Hunting"],
    origin: "Worldwide",
    lifespan: 30,
    sleeping: true,
    image: "assets/eagle.jpg",
  },
  {
    name: "Elephant",
    species: "Elephantidae",
    capabilities: ["Strength", "Intelligence", "Memory"],
    origin: "Africa, Asia",
    lifespan: 60,
    sleeping: true,
    image: "assets/elephant.jpg",
  },
];

const App = () => {
  return (
    <div className="main-container">
      <Header title="Zoo Tour" />
      <Zoo />
      <Footer />
    </div>
  );
};

export default App;

const Footer = () => {
  const dateDay = new Date().getHours();
  const timing =
    dateDay >= 8 && dateDay <= 22
      ? "The Zoo is Open"
      : "Zoo is closed all animals are sleeping";
  return <h1 className="footer">{timing}</h1>;
};

const Header = ({ title }) => {
  return <h1 className="header">{title}</h1>;
};

function Zoo() {
  return (
    <section className="zoo-container">
      <p>Showing the animals that are awake. Grayad one are sleeping</p>

      {animals.map((animal) => {
        return <Animal key={animal.name} data={animal} />;
      })}
    </section>
  );
}

function Animal({ data }) {
  const { name, species, lifespan, sleeping, capabilities, origin, image } =
    data;
  return (
    <main
      key={name}
      className={`animal-container animal ${sleeping ? "grayed" : ""}`}
    >
      <div className="animal-img-container">
        <img className="animal-img" src={image} alt="animal" />
      </div>
      <div className="animal-information">
        <p className="species">{species}</p>
        <p className="lifespan">{lifespan}</p>
        <p className="name">{name}</p>
        <p className="origin">{origin}</p>
        <div className="capabilities">
          Capabilities:
          {capabilities.map((capability) => {
            return <Capabilities key={capability} capability={capability} />;
          })}
        </div>
      </div>
    </main>
  );
}

const Capabilities = ({ capability }) => {
  return <p className="cap">{capability}</p>;
};
