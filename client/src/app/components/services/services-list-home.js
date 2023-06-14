import GridItemContainer from "../layout/GridItemLayout";

const services = [
  {
    title: "Werken voor echte klanten",
    synopsis: "...",
    id: 0,
    thumbnailUrl: ""
  },
  {
    title: "Werkplekleren: echte cases, gastcolleges ... stage",
    synopsis: "...",
    id: 1,
    thumbnailUrl: ""
  },
  {
    title: "Onderzoek",
    synopsis: "...",
    id: 2,
    thumbnailUrl: ""
  },
  {
    title: "Dienstverlening",
    synopsis: "...",
    id: 3,
    thumbnailUrl: ""
  },
  {
    title: "Workshop: start-to-code",
    synopsis: "...",
    id: 4,
    thumbnailUrl: ""
  }
];

const Services = () => {
  return (
      <div className="row row-cols-1 row-cols-md-3 g-5">
        {services && services.map(service => 
        <GridItemContainer card={service} adres="service" style="cover" />
        )}
      </div>
  )
};

export default Services;