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
                    <button class="pulse"><a href="1950" @click.prevent="filterMedia('1950')">1950's</a></button>
                    <button class="pulse"><a href="1960" @click.prevent="filterMedia('1960')">1960's</a></button>
                    <button class="pulse"><a href="1970" @click.prevent="filterMedia('1970')">1970's</a></button>
                    <button class="pulse"><a href="1980" @click.prevent="filterMedia('1980')">1980's</a></button>
                    <button class="pulse"><a href="1990" @click.prevent="filterMedia('1990')">1990's</a></button>

                </div>
                
                
            </div>
            
            
            
        </div> 
        <div class="container">
        
        <h2 class="display-5 ml-4">Recommended for you</h2>
        <section>
    <div class="row">
        <div class="col-sm-12  mt-4 col-md-6 media-container">
            <h4 class=" media-title">{{currentMediaDetails.movies_title}}</h4>
            <a>Storyline</a>
            <p class="media-details" v-html="currentMediaDetails.movies_storyline"></p>
            <span class="media-time">{{currentMediaDetails.movies_runtime}}</span>
            <span class=" d-block media-year">{{currentMediaDetails.movies_year}} </span>
        </div>
        <div class="col-sm-12 order-1 order-md-2 col-md-6 media-container">
        <img :src="'images/movies/' + currentMediaDetails.movies_cover" alt="meida thum" width="400" class=" p-2 img-fluid">
        </div>
        </div>


        <div>
        <a>Play</a>
        <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" :src="currentMediaDetails.movies_trailer" allowfullscreen></iframe>
        </div>
        
          
        </div>
    

    
    <div class="row">
    <div class="col-12 col-sm-9">
        <div class="d-flex flex-wrap row clearfix mx-3 justify-content-center">
        <img v-for="item in allRetrievedVideos" :src="'images/movies/' + item.movies_cover" alt="meida thum" @click="loadNewMovie(item)" class="col-4 p-2  img-fluid">
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