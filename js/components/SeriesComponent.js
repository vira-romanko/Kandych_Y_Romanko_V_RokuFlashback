import FooterComponent from "./layout/FooterComponent.js";
import NavAdminComponent from "./layout/NavAdminComponent.js";


export default {
    
    name: "TheSeriesComponent",
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
            message: "Series",
            image:"./images/hero/hero_series.jpg"
         
        };
    },
  
    methods: {},
   

    components: {
        NavAdminComponent,
        FooterComponent
      },
      mounted () {
       
    }
};