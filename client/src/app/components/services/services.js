const services = [
  {
    title: "Werken voor echte klanten",
    synopsis: "...",
    id: 0
  },
  {
    title: "Werkplekleren: echte cases, gastcolleges ... stage",
    synopsis: "...",
    id: 1
  },
  {
    title: "Onderzoek",
    synopsis: "...",
    id: 2
  },
  {
    title: "Dienstverlening",
    synopsis: "...",
    id: 3
  },
  {
    title: "Workshop: start-to-code",
    synopsis: "...",
    id: 4
  }
];

const Services = () => {
  return (
      <div className="row row-cols-1 row-cols-md-3 g-5">
        {services && services.map(service => 
        <div className="col">
          <div className="card bg-dark text-white">
            <img src="logo512.png" className="card-img" alt={service.title}></img>
            <div className="card-img-overlay">
              <h2 className="card-title">{service.title}</h2>
              <p className="card-text">{service.synopsis}</p>
            </div>
          </div>
        </div>
        )}
      </div>
  )
};

export default Services;