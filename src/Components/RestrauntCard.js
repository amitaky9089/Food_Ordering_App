import { CDN_URL } from "../utils/constant";

const RestrauntCard = (props) => {
  // props is whole object while resData is specific property inside it.
    // props is an object which contain all properties passed to our component 
    // resData is also a property inside prop so we have to destructure it.
    const {resData}=props;
  const {name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo} = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL+cloudinaryImageId}
      >
      </img>
       <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} Stars</h5> 
      <h5>{costForTwo}</h5>
       <h5>{sla?.slaString}</h5>
    </div>
  );
};

export default RestrauntCard;