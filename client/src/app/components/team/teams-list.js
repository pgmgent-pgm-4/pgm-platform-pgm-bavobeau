import { Outlet } from "react-router-dom";
import { GridLayoutContainer, UserItemContainer } from "../layout";

const TeamsListComponent = ({children, teams}) => {
  return (
      <GridLayoutContainer amount={5}>
        {teams && teams.map((team) => (
          <UserItemContainer user={team} adres="teams" style="cover" key={team.id}/>
          ))}
        <Outlet />
        {children}
      </GridLayoutContainer>
  )
};

export default TeamsListComponent;