import { GridItemContainer, GridLayoutContainer } from "../layout";
import { services } from '../services'

const ServicesListHome = () => {
  return (
      <GridLayoutContainer>
        {services && services.map(service => 
        <GridItemContainer card={service} adres="service" style="cover" />
        )}
      </GridLayoutContainer>
  )
};

export default ServicesListHome;