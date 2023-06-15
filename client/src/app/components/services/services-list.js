import { services } from "../services";

const ServicesList = () => {
  return (
    <div className="row row-cols-2">
      {services &&
        services.map((service, key) => {
          if (key % 2 === 0) {
            return (
              <>
                <div className="col">
                  <h3>{service.title}</h3>
                  <p>{service.synopsis}</p>
                </div>
                <div className="col">
                  <img src={service.thumbnailUrl} alt={service.title}></img>
                </div>
              </>
            );
          }
          return (
            <>
              <div className="col">
                <img src={service.thumbnailUrl} alt={service.title}></img>
              </div>
              <div className="col">
                <h3>{service.title}</h3>
                <p>{service.synopsis}</p>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default ServicesList;
