import { BodyLayoutContainer, UserNavigation } from "../components/layout";
import { useAuth } from "../context";
import { ProfileDetail } from "../components/profile";


const ProfilePage = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <UserNavigation />
      <BodyLayoutContainer>
        <h1 className="text-3xl font-bold underline">User: { currentUser.username }</h1>
        <ProfileDetail userId={currentUser.id}/>
      </BodyLayoutContainer>
    </>
  );
};

export default ProfilePage;