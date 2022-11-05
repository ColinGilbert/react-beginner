import RenderCard from "./RenderCardComponent";
import Loading from "./LoadingComponent";
import { useEffect } from "react";
const Home = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.dishes.errMess}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.dish}
              isLoading={props.isLoading}
              errMsg={props.errMsg}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.promotion} />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard item={props.leader} />
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
