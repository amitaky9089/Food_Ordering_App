import { CDN_URL } from "../utils/constant";

const RestrauntCard = (props) => {
  // props is whole object while resData is specific property inside it.
    // props is an object which contain all properties passed to our component 
    // resData is also a property inside prop so we have to destructure it.
    const {resData}=props;
  const {name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo} = resData?.info;
  return (
    <div className="res-card m-2 p-4 w-56 bg-slate-100 hover:bg-slate-200 rounded-lg">
      <img
        className="res-logo rounded-md"
        src={CDN_URL+cloudinaryImageId}
      >
      </img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} Stars</h5> 
      <h5>{costForTwo}</h5>
       <h5>{sla?.slaString}</h5>
    </div>
  );
};

export default RestrauntCard;