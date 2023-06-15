import { GridItemContainer, GridLayoutContainer } from "../layout";
import { services } from '../services'

const ServicesListHome = () => {
  return (
      <GridLayoutContainer amount={3}>
        {services && services.map(service => 
        <GridItemContainer card={service} adres="services" style="cover" />
        )}
      </GridLayoutContainer>
  )
};

export default ServicesListHome;