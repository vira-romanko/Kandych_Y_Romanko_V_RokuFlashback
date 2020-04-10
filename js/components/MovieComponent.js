import FooterComponent from "./layout/FooterComponent.js";
import NavAdminComponent from "./layout/NavAdminComponent.js";


export default {
    name: "TheMovieComponent",
    

    template: `
    <div>


    <div :style="{ backgroundImage: 'url(' + image + ')' }" class="jumbotron  jumbotron-fluid">
            <div class="container-fluid">
            <NavAdminComponent />
               
                <div class="hero-el" id="reveal1">
                    <a href="#"  class="navbar-brand">
                        <img class="img-fluid" src="images/logos/logo_roku_main.svg" alt="logo" />
        
                    </a>
                    
                </div>

                <h1 class="display-3 hero-el">
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
        <div class="container">
        
        <h2 class="display-5 ml-4">Recommended for you</h2>
        <section>
    <div class="row">
        <div class="col-12 order-2 order-md-1 col-md-3 media-container">
            <h4 class="media-title">{{currentMediaDetails.movies_title}}</h4>
            <p class="media-details" v-html="currentMediaDetails.movies_storyline"></p>
            <span class="media-time">{{currentMediaDetails.movies_runtime}}</span>
            <span class="media-year">{{currentMediaDetails.movies_year}} </span>
        </div>

        <div class="col-12 order-1 order-md-2 col-md-9 media-container">
            <video autoplay controls muted :src="'video/' + currentMediaDetails.movies_trailer" class="fs-video"></video>
        </div>
    </div>

       <div class="col-12 col-sm-9 media-info">
          <ul class="media-genres">
            <li>
            <a href="action" @click.prevent="filterMedia('action')">Action</a>
            </li>
            </ul>
      </div>
    <div class="row">
    <div class="col-12 col-sm-9">
        <div class="d-flex flex-wrap row clearfix">
        <img v-for="item in allRetrievedVideos" :src="'images/movies/' + item.movies_cover" alt="meida thum" @click="loadNewMovie(item)" class="col-4 p-2 img-fluid">
        </div>
        </div>
        </div>
    </section>
        
        </div>
        
    
    <FooterComponent />
    
    </div>
   
    `,
    data(){
        
          
        return{
            message: "Movies",
            image:"./images/hero/hero_movies.jpg",
            currentMediaDetails: {},
            allRetrievedVideos: []

         
            
         
        };
    },
    created: function (){
        this.retrieveVideoContent();
    },
  
    
     
    methods: {
        filterMedia(filter){
            //debugger;
            let url=`./admin/index.php?media=movies&filter=${filter}`;
            fetch(url)
            .then(res =>res.json())
            .then(data => {
                this.allRetrievedVideos = data;
                this.currentMediaDetails = data[0];
            })

        },
        retrieveVideoContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            //debugger;
            if(localStorage.getItem("cachedVideo")){
                this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedVideo"));
                this.currentMediaDetails = this.allRetrievedVideos[0];

            }else{

                let url = './admin/index.php?media=movies';
                fetch(url)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("cachedVideo", JSON.stringify(data));

                    this.allRetrievedVideos = data;
                    this.currentMediaDetails = data[0];
                })
    

            }
          

        },

        loadNewMovie(movie) {
            this.currentMediaDetails = movie;
        },

        
     
    },
    
      
      
   

    components: {
        NavAdminComponent,
        FooterComponent
      },
      mounted(){
       
    }
};