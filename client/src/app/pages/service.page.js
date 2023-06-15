import { BodyLayoutContainer } from "../components/layout";
import { ServicesList } from "../components/services";

const ServicePage = () => {
  return (
    <BodyLayoutContainer>
      <h1 className="text-3xl font-bold">
        <u>Services</u>
      </h1>
      <ServicesList />
    </BodyLayoutContainer>
  );
};

export default ServicePage;
