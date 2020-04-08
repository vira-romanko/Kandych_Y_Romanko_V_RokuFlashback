export default {
    props: ['liveuser'],

    template: `
    <div class="mx-auto mt-5 single-user">
        <div  @click="navToUserHome()">
            <div class="text-center">
                <img :src="'images/user/' + liveuser.avatar + '.png'" class=" mr-2 mb-2 img-fluid users-img">
                <h3 class="user-name ">{{ liveuser.username }}</h3>
            </div>
        </div>
    </div>`,

    created: function(){
        if(this.liveuser.avatar === null || this.liveuser.avatar === "null"){
            this.liveuser.avatar = "temp_avatar";
        }
    },
    
    methods:{
        navToUserHome(){
            //debugger;
            localStorage.setItem("cachedUser", JSON.stringify(this.liveuser));
            // send this user to its home page and pass the use object oth the home page
            this.$router.push({name: "movies", params: {currentuser: this.liveuser}})
        }
    }
}