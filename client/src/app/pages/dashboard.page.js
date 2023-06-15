import { BodyLayoutContainer, UserNavigation } from "../components/layout";
import { PortfolioEdit } from "../components/portfolio";
import { useAuth } from "../context";

const DashboardPage = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <UserNavigation />
      <BodyLayoutContainer>
        <h1 className="text-3xl font-bold underline">
          Dashboard {currentUser.username}
        </h1>
        <PortfolioEdit userId={currentUser.id} />
      </BodyLayoutContainer>
    </>
  );
};

export default DashboardPage;
