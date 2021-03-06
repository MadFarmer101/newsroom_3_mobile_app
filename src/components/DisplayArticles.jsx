import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSingleArticle } from "../state/actions/articleAction";
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonIcon,
  IonButton,
  IonGrid,
  IonTitle,
} from "@ionic/react";
import { planet } from "ionicons/icons";

const DisplayArticles = (props) => {
  const showArticle = (articleId) => {
    props.fetchSingleArticle(articleId);
  };
  let articles;
  if (props.selectedCategory) {
    articles = props.articles.filter((article) => {
      return article.category === props.selectedCategory && article;
    });
  } else {
    articles = props.articles;
  }
  let articleDisplay = articles.map((article) => {
    return (
      <IonCard>
        <IonGrid key={article.id} id={"article-" + article.id} align="center">
          <IonItem>
            <IonIcon icon={planet} slot="start" />
          </IonItem>
          <IonItem>
            <IonTitle align="center">{article.title}</IonTitle>
          </IonItem>
          <img src={article.image} alt={`${article.title}-image`} />
          <IonCardContent>{article.snippet} </IonCardContent>
          <IonItem>
            <IonButton
              fill="outline"
              slot="end"
              onClick={() => showArticle(article.id)}
              key={article.id}
            >
              View
            </IonButton>
          </IonItem>
        </IonGrid>
      </IonCard>
    );
  });
  return <IonContent>{articleDisplay}</IonContent>;
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    selectedCategory: state.selectedCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleArticle: bindActionCreators(fetchSingleArticle, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayArticles);
