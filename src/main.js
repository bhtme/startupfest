import Vue from 'vue';
import VueFire from 'vuefire';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import createProvider from './vue-apollo';
import 'firebase/firestore';

Vue.use(VueFire);

firebase.initializeApp({
  apiKey: 'AIzaSyDxzhIiK1QO-lbGm7Pyk7cUwN0trKd06Do',
  authDomain: 'startupfest-leops.firebaseapp.com',
  databaseURL: 'https://startupfest-leops.firebaseio.com',
  projectId: 'startupfest-leops',
  storageBucket: 'startupfest-leops.appspot.com',
  messagingSenderId: '588797770144',
});

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export const store = {
  db: firestore,
  Scores: null,
  Startups: [],
};

const coll = firestore.collection('startupScore');

coll.onSnapshot((scoreRef) => {
  const startups = { allNames: [] };
  scoreRef.forEach((doc) => {
    startups.allNames.push(doc.data().startupName);
    startups[doc.data().startupName] = doc.data().score;
    startups[doc.data().startupName].docId = doc.id;
    startups[doc.data().startupName].nAvals = doc.data().nAvals;
    if (store.Startups.indexOf(doc.data().startupName) === -1) {
      store.Startups.push(doc.data().startupName);
    }
  });
  store.Scores = startups;
});

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App),
}).$mount('#app');
