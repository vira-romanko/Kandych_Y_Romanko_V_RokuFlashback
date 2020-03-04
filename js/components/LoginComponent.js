export default {
    template: `
        <div>
            <div class="jumbotron-login">
                <p class="lead">Before revisiting your favourite movies, tv shows or music from yesteryear, please log in with a valid username and password.</p>
                <hr class="my-4">
                <form @submit.prevent="login">
                    <div class="form-row align-items-center">
                        <div class="col-md-3 my-1">
                            <label class="sr-only" for="inlineFormInputName">Name</label>
                            <input v-model="input.username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>
                        </div>

                        <div class="col-md-3 my-1">
                            <label class="sr-only" for="inlineFormPassword">Name</label>
                            <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
                        </div>

                        <div class="col-auto my-1">
                            <button type="submit" class="btn btn-primary">Go!</button>
                        </div>
                    </div>
                </form>            
            </div>
        </div>
     `,

    data() {
        return {
            input: {
                username: "",
                password: ""
                
            },

        }
    },

    methods: {
        login() {
            //console.log(this.$parent.mockAccount.username);
            //debugger;
            if (this.input.username != "" && this.input.password != ""){

                //use the FormData object to collect and send our params
                let formData = new FormData();
                formData.append("username", this.input.username);
                formData.append("password", this.input.password);
                let url = "./includes/index.php?user=true";

                fetch(url, {
                    method: "POST",
                    body: formData
                })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // tell the app that we a successful log in
                    // true below means that authentication worked
                    //data is the user we retrived from the db
                    this.$emit("authenticated", true, data[0]);
                    //srote the user object that we retrieved

                    //push the user to the users page
                    this.$router.replace({name: "users"});


                })
                .catch((err) => console.log(err));

            }else{
                console.error("inpunts cant be blank!");
            }
        }
    }
}