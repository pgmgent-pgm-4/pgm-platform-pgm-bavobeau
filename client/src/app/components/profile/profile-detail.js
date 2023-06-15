import { useQuery } from "@apollo/client";
import Map, { Marker } from 'react-map-gl';

import { GET_PROFILE_BY_USER } from "../../graphql";

const ProfileDetail = ({userId}) => {
  const {data, loading, error} = useQuery(GET_PROFILE_BY_USER, {
    variables: {
      userId: userId
    }
  });

  const gqlResultAsJSX = () => {
    if (loading) return (
      <div className="spinner-border" role="status">
        <strong>Loading...</strong>
        <span className="visually-hidden">Loading...</span>
      </div>
    );

    if (error) return <p>Error :{error.toString()}</p>;

    return (
      console.log(data),
      <>          
        <div className="row column-gap-3">
          <div className="col-4">
            <img src={data.authUser.avatar.url} alt={data.authUser.profile.firstName}></img>
          </div>
          <div className="col-7">
            <h1>{data.authUser.profile.firstName} {data.authUser.profile.lastName}</h1>
            <h2>Day of birth: {data.authUser.profile.dayOfBirth}</h2>
            <h2>Email: {data.authUser.email}</h2>
            <Map
        initialViewState={{
          longitude: data.authUser.profile.geoLocation.longitude,
          latitude: data.authUser.profile.geoLocation.latitude,
          zoom: 14
        }}
        style={{width: '100%', height: '100%'}}
        mapStyle="mapbox://styles/mapbox/streets-v9" 
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      >
        <Marker longitude={data.authUser.profile.geoLocation.longitude} latitude={data.authUser.profile.geoLocation.latitude} anchor='center'>
          <img src='./logo512.png' width={32} height={32} alt='...' />
        </Marker>
      </Map>
          </div>
        </div>
      </>
    )
  };

  return (
    <>
      {gqlResultAsJSX()}
    </>
  )
};

export default ProfileDetail;