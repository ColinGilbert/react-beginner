import Home from "./HomeComponent";

const HomePage = (props) => {
  return (
    <Home
      dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
      promotion={props.promotions.filter((promo) => promo.featured)[0]}
      leader={props.leaders.filter((leader) => leader.featured)[0]}
      isLoading={props.dishes.isLoading}
      errMsg={props.dishes.errMsg}
    />
  );
};

export default HomePage;
