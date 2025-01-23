import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  homeOutline,
  home,
  bookOutline,
  book,
  shieldCheckmark,
  shieldCheckmarkOutline,
  newspaper,
  newspaperOutline,
  clipboard,
  clipboardOutline,
  person,
} from 'ionicons/icons';
import Home from '../pages/Lessons/Home';
import LessonOne from '../pages/Lessons/LessonOne';
// import LessonOneTopic1 from '../pages/LessonOneTopic1';
import LessonTwo from '../pages/Lessons/LessonTwo';
import LessonThree from '../pages/Lessons/LessonThree';
import LessonFour from '../pages/Lessons/LessonFour';
import ThreatDetectionTools from '../pages/Tools/ThreatDetectionTools';
import ToolsTopicOne from '../pages/Tools/ToolsTopicOne';
import ToolsTopicTwo from '../pages/Tools/ToolsTopicTwo';
import ToolsTopicThree from '../pages/Tools/ToolsTopicThree';
import ToolsTopicFour from '../pages/Tools/ToolsTopicFour';
import Articles from '../pages/Articles/Articles';
import ArticleTopicOne from '../pages/Articles/ArticleTopicOne';
import ArticleTopicTwo from '../pages/Articles/ArticleTopicTwo';
import ArticleTopicThree from '../pages/Articles/ArticleTopicThree';
import ArticleTopicFour from '../pages/Articles/ArticleTopicFour';
import Quiz from '../pages/Quizzes/Quiz';
import QuizOne from '../pages/Quizzes/QuizOne';
import QuizTwo from '../pages/Quizzes/QuizTwo';
import QuizThree from '../pages/Quizzes/QuizThree';
import QuizFour from '../pages/Quizzes/QuizFour';
import Profile from '../pages/Profile';

const Tabs: React.FC = () => {
  const location = useLocation(); //for icons; change when active and inactive

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tabs/home" component={Home} />
        <Route exact path="/tabs/home/lessonone" component={LessonOne} />
        <Route exact path="/tabs/home/lessontwo" component={LessonTwo} />
        <Route exact path="/tabs/home/lessonthree" component={LessonThree} />
        <Route exact path="/tabs/home/lessonfour" component={LessonFour} />
        {/* <Route
          exact
          path="/tabs/home/lessonone/lessononetopic1"
          component={LessonOneTopic1}
        /> */}
        <Route
          exact
          path="/tabs/threatdetectiontools"
          component={ThreatDetectionTools}
        />
        <Route
          exact
          path="/tabs/threatdetectiontools/toolstopicone"
          component={ToolsTopicOne}
        />
        <Route
          exact
          path="/tabs/threatdetectiontools/toolstopictwo"
          component={ToolsTopicTwo}
        />
        <Route
          exact
          path="/tabs/threatdetectiontools/toolstopicthree"
          component={ToolsTopicThree}
        />
        <Route
          exact
          path="/tabs/threatdetectiontools/toolstopicfour"
          component={ToolsTopicFour}
        />
        <Route exact path="/tabs/articles" component={Articles} />
        <Route exact path="/tabs/articles/articletopicone" component={ArticleTopicOne} />
        <Route exact path="/tabs/articles/articletopictwo" component={ArticleTopicTwo} />
        <Route exact path="/tabs/articles/articletopicthree" component={ArticleTopicThree} />
        <Route exact path="/tabs/articles/articletopicfour" component={ArticleTopicFour} />
        <Route exact path="/tabs/quiz" component={Quiz} />
        <Route exact path="/tabs/quiz/quizone" component={QuizOne} />
        <Route exact path="/tabs/quiz/quiztwo" component={QuizTwo} />
        <Route exact path="/tabs/quiz/quizthree" component={QuizThree} />
        <Route exact path="/tabs/quiz/quizfour" component={QuizFour} />
        <Route exact path="/tabs/profile" component={Profile} />
        <Route path="/tabs" render={() => <Redirect to="/tabs/home" />} exact />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/tabs/home">
          {/* <IonIcon
            aria-hidden="true"
            icon={location.pathname === '/tabs/home' ? book : book}
          /> */}
          <IonIcon icon={book}></IonIcon>
        </IonTabButton>
        <IonTabButton
          tab="threatdetectiontools"
          href="/tabs/threatdetectiontools"
        >
          <IonIcon icon={shieldCheckmark}></IonIcon>
          {/* <IonIcon
            aria-hidden="true"
            icon={
              location.pathname === '/tabs/tab3'
                ? shieldCheckmark
                : shieldCheckmarkOutline
            }
          /> */}
        </IonTabButton>
        <IonTabButton tab="articles" href="/tabs/articles">
          <IonIcon icon={newspaper}></IonIcon>
          {/* <IonIcon
            aria-hidden="true"
            icon={
              location.pathname === '/tabs/articles'
                ? newspaper
                : newspaperOutline
            }
          /> */}
        </IonTabButton>
        <IonTabButton tab="quiz" href="/tabs/quiz">
          <IonIcon icon={clipboard}></IonIcon>
          {/* <IonIcon
            aria-hidden="true"
            icon={
              location.pathname === '/tabs/quiz' ? clipboard : clipboardOutline
            }
          /> */}
        </IonTabButton>
        <IonTabButton tab="profile" href="/tabs/profile">
          <IonIcon icon={person}></IonIcon>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
