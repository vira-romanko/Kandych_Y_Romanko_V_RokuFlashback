import SeriesComponent from "./components/SeriesComponent.js";
import MovieComponent from "./components/MovieComponent.js";
import MusicComponent from "./components/MusicComponent.js";
import LoginComponent from "./components/LoginComponent.js";
import UsersComponent from "./components/UsersComponent.js";

(() => {
  let router = new VueRouter({
    // set routes
    routes: [
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/', redirect: { name: "login" } },
      {path: '/users', name: 'users', component: MovieComponent},
      
      
      { path: '/movies', name: "movies", component: MovieComponent },
      { path: '/music', name: "music", component: MusicComponent },
      { path: '/series', name: "series", component: SeriesComponent }
     
    ]
  });


var vm = new Vue({
    el: "#app",
    
    
   
    data: {
      authenticated: false,
      administrator: false,

      mockAccount: {
        username: "user",
        password: "password"
      },

      user: [],
      },

      created: function () {
        // do a localstorage session check and set authenticated to true if the session still exists
        // if the cached user exists, then just navigate to their user home page
  
        // the localstorage session will persist until logout
      },

      methods: {
        setAuthenticated(status, data) {
          this.authenticated = status;
          //type coversion
          // handle implicit type coercion (bad part of js)
          // turn our admin 1 or 0 back into a number
          this.administrator = parseInt(data.isadmin);
          this.user = data;
        },
  
        logout() {
          // delete local session
  
          // push user back to login page
          this.$router.push({ path: "/login" });
          this.authenticated = false;
          this.administrator = false;
        }
      },
    
  

    router: router
  }).$mount("#app");


  // router.beforeEach((to, from, next) => {
  //   console.log('router guard fired');
  //   // if the authenticated property is set to false, then
  //   // push the user back to the login screen cux theyre not logged in

  //   if(vm.authenticated == false){
  //     next("/login");

  //   }else{
  //     next();
  //   }
  // })

})();

