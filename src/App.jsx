import React from "react";
import { IonApp } from "@ionic/react";
import Menu from "./components/Menu";
import DisplayArticles from "./components/DisplayArticles";
import { fetchArticles } from "./state/actions/articleAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DisplaySingleArticle from "./components/DisplaySingleArticle";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import LoginForm from "./components/LoginForm";

const App = (props) => {
  props.fetchArticles();

  return (
    <IonApp>
      <Menu />
      {props.showLoginForm && <LoginForm />}
      {props.articleList && <DisplayArticles />}
      {props.singleArticle && <DisplaySingleArticle />}
    </IonApp>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticles: bindActionCreators(fetchArticles, dispatch),
    dispatch: dispatch,
  };
};

const mapStateToProps = (state) => {
  return {
    singleArticle: state.singleArticle,
    articleList: state.articleList,
    showLoginForm: state.showLoginForm
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
