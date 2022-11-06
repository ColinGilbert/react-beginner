import { useEffect, useState, useCallback } from "react";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import HomePage from "./HomePageComponent";
import DishDetail from "./DishDetailComponent";
import About from "./AboutComponent";
import { Route, Redirect, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "react-redux-form";
import "../App.css";
import {
  addComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  postComment,
} from "../redux/ActionCreators";

const Main = (props) => {
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.dishes);
  const promotions = useSelector((state) => state.promotions);
  const leaders = useSelector((state) => state.leaders);
  const comments = useSelector((state) => state.comments);

  // const fetchDishes = useCallback(() => {
  //   dispatch(fetchDishes());
  // }, [dispatch]);

  const resetFeedbackForm = () => dispatch(actions.reset("feedback"));
  const postCommentToServer = (dishId, rating, author, comment) => {
    dispatch(postComment(dishId, rating, author, comment));
  };

  // const fetchDishes = () => dispatch(fetchDishes());
  // const fetchComments = () => dispatch(fetchComments());
  // const fetchPromos = () => dispatch(fetchPromos());

  useEffect(() => {
    dispatch(fetchDishes());
    dispatch(fetchComments());
    dispatch(fetchPromos());
  }, [dispatch]);

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={
          dishes.dishes.filter((d) => d.id === parseInt(match.params.dishId))[0]
        }
        comments={comments.comments.filter(
          (c) => c.dishId === parseInt(match.params.dishId)
        )}
        isLoading={dishes.isLoading}
        errMess={dishes.errMess}
        postComment={postCommentToServer}
      />
    );
  };

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/home"
          component={() => {
            return (
              <HomePage
                dishes={dishes}
                leaders={leaders}
                promotions={promotions}
              />
            );
          }}
        />
        <Route
          exact
          path="/aboutus"
          component={() => <About leaders={leaders} />}
        />
        <Route exact path="/menu" component={() => <Menu dishes={dishes} />} />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route
          exact
          path="/contactus"
          component={() => <Contact resetFeedbackForm={resetFeedbackForm} />}
        />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};
export default Main;
