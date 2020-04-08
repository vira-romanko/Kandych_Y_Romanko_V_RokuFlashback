// import UserComponent from '../UserComponent.js';
// import AllUsersComponent from '../AllUsersComponent.js';

export default {
    template: `
    <nav class="navbar" id="cool">
    <ul class="navbar-nav flex-row flex-wrap">
    <li class="nav-item">
    <router-link class=" nav-link" to="/movies"><img src="images/nav/movie.svg" alt="movies"  class="d-inline-block"/><span class="d-none d-lg-inline align-text-bottom ">MOVIES</span></router-link>
</li>
<li class=" nav-item ">
    <router-link class=" nav-link" to="/series"><img src="images/nav/series.svg" alt="series" class="d-inline-block series"/> <span class="d-none d-lg-inline align-text-bottom ">SERIES</span></router-link>
</li>
<li class="nav-item">
    <router-link class=" nav-link" to="/music"><img src="images/nav/music.svg" alt="music"  class="d-inline-block"/> <span class="d-none d-lg-inline align-text-bottom ">MUSIC</span></router-link>
</li>
        <li class=" nav-item ">
            <a class=" nav-link" href="#"><img src="images/nav/watchlist.svg" alt="watchlist"  class="d-inline-block"/> <span class="d-none d-lg-inline align-text-bottom ">WATCHLIST</span></a>
        </li>
        <li class=" nav-item ">
            <a class=" nav-link" href="#"><img src="images/nav/search.svg"   class="d-inline-block"/><span class="d-none d-lg-inline align-text-bottom ">SEARCH</span></a>
        </li>  
    </ul>
    <div class="dropleft float-right mr-2">
    <button  class="user-button nav-link ml-auto dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  href="#"><img src="images/nav/general-avatar.svg"  class="img-fluid"/></button>

<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">

                    
</div>
</div>
    

</nav>

   
    `
      
};
