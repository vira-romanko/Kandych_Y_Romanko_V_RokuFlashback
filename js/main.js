import SeriesComponent from "./components/SeriesComponent.js";
import MovieComponent from "./components/MovieComponent.js";
import MusicComponent from "./components/MusicComponent.js";
import LoginComponent from "./components/LoginComponent.js";
import AllUsersComponent from "./components/AllUsersComponent.js";

(() => {
  let router = new VueRouter({
    // set routes
    routes: [
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/', redirect: { name: "login" } },
      {path: '/users', name: 'users', component: AllUsersComponent,  props: true},
      
      
      { path: '/movies', name: "movies", component: MovieComponent,  props: true },
      { path: '/music', name: "music", component: MusicComponent,  props: true },
      { path: '/series', name: "series", component: SeriesComponent,  props: true }
     
    ]
  });


var vm = new Vue({
    el: "#app",
    
    
   
    data: {
      authenticated: false,
      administrator: false,

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
          //this.administrator = parseInt(data.isadmin);
          this.user = data;
        },
  
        logout() {
          // push user back to login page
        this.$router.push({ name: "login" });
        this.authenticated = false;

        if(localStorage.getItem("cachedUser")){
          localStorage.removeItem("cachedUser");
        }
        if(localStorage.getItem("cachedVideo")){
          localStorage.removeItem("cachedVideo");
        }
        }
      },
      created:function(){

        //check for a user in localStorage
        //if we've logged in before, this should be hefe untill we manually remove
  
        if(localStorage.getItem("cachedUser")){
          let user = JASON.parse(localStorage.getItem("cachedUser"));
  
          this.authenticated = true;
  
          this.$router.push({name: "home", params:{currentuser: user}});
        }else{
          this.$router.push({name: "login"});
        }
  
      },
    
  

    router: router
  }).$mount("#app");


  router.beforeEach((to, from, next) => {
    console.log('router guard fired');
    // if the authenticated property is set to false, then
    // push the user back to the login screen cux theyre not logged in

    if(vm.authenticated == false){
      next("/login");

    }else{
      next();
    }
  })

})();

