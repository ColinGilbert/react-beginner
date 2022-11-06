import Home from "./HomeComponent";

const HomePage = (props) => {
  return (
    <Home
      dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
      promotion={
        props.promotions.promotions.filter((promo) => promo.featured)[0]
      }
      leader={props.leaders.filter((leader) => leader.featured)[0]}
      dishesLoading={props.dishes.isLoading}
      dishErrMsg={props.dishes.errMsg}
      promoLoading={props.promotions.isLoading}
      promoErrMsg={props.promotions.errMsg}
    />
  );
};

export default HomePage;
