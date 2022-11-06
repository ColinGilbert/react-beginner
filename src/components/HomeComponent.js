import RenderCard from "./RenderCardComponent";
import Loading from "./LoadingComponent";
import { useEffect } from "react";
const Home = (props) => {
  if (props.dishesLoading || props.promoLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishErrMsg) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.dishErrMsg}</h4>
        </div>
      </div>
    );
  } else if (props.promoErrMsg) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.promoErrMsg}</h4>
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
              errMsg={props.dishErrMsg}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.promotion}
              errMsg={props.promoErrMsg}
              isLoading={props.promoLoading}
            />
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
