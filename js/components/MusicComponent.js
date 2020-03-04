import FooterComponent from "./layout/FooterComponent.js";
//import NavAdminComponent from "./layout/NavAdminComponent.js";


export default {
    

    template: `
    <div>


    <div :style="{ backgroundImage: 'url(' + image + ')' }" class="jumbotron  jumbotron-fluid">
            <div class="container-fluid">
                <nav class="navbar  sticky-top" id="cool">
                    <ul class="navbar-nav flex-row">
                    <li class=" nav-item ">
                    <router-link class=" nav-link" to="/movies"><object data="images/nav/movie.svg" type="image/svg+xml"  class="d-inline-block"></object> <span class="d-none d-lg-inline align-text-bottom ">MOVIES</span></router-link>
                </li>
                <li class=" nav-item ">
                    <router-link class=" nav-link" to="/series"><object data="images/nav/series.svg" type="image/svg+xml"  class="d-inline-block series"></object> <span class="d-none d-lg-inline align-text-bottom ">SERIES</span></router-link>
                </li>
                <li class=" nav-item ">
                    <router-link class=" nav-link" to="/music"><object data="images/nav/music.svg" type="image/svg+xml"  class="d-inline-block"></object> <span class="d-none d-lg-inline align-text-bottom ">MUSIC</span></router-link>
                </li>
                        <li class=" nav-item ">
                            <a class=" nav-link" href="#"><object data="images/nav/watchlist.svg" type="image/svg+xml"  class="d-inline-block"></object> <span class="d-none d-lg-inline align-text-bottom ">WATCHLIST</span></a>
                        </li>
                        <li class=" nav-item ">
                            <a class=" nav-link" href="#"><object data="images/nav/search.svg" type="image/svg+xml"  class="d-inline-block"></object> <span class="d-none d-lg-inline align-text-bottom ">SEARCH</span></a>
                        </li>  
                    </ul>
                    <a class="  nav-link ml-auto" href="#"><object data="images/nav/general-avatar.svg" type="image/svg+xml" class="img-fluid"></object></a>

                </nav>

                <div class="hero-el" id="reveal1">
                    <a href="#"  class="navbar-brand">
                        <img class="img-fluid" src="images/logos/logo_roku_main.svg" alt="logo" />
        
                    </a>
                    
                </div>

                <h1 class="display-2 hero-el">
                {{ message }}
                </h1>
                <div class=" buttons hero-el d-flex flex-wrap justify-content-sm-center justify-content-lg-start">
                    <button class="pulse">1950's</button>
                    <button class="pulse">1960's</button>
                    <button class="pulse">1970's</button>
                    <button class="pulse">1980's</button>
                    <button class="pulse">1990's</button>

                </div>
                
                
            </div>
            
            
            
        </div> 
      
    
    <FooterComponent />
    </div>
   
    `,
    data(){
        return{
            message: "Music",
            image:"./images/hero/hero_music.jpg"
         
        };
    },
  
    methods: {},
   

    components: {
        //NavAdminComponent,
        FooterComponent
      },
      mounted () {
       
    }
};