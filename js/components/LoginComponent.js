export default {
    template: `
        <div class="jumbotron-login">
            <div class=" login-page d-flex row justify-content-center">
             <div class="col">
                    <a href="#" class="col-12 m-4" >
                        <img class="img-fluid" src="images/logos/logo_roku_main.svg" alt="logo" />
        
                    </a>
                <h1 class=" display-5  lead m-5 align-middle"> Best music of 21st century</h1>
                </div>
                <div class="form-div ">
                <form @submit.prevent="login">
                <h2 class="disply-4 text-center m-4"> Sign in</h2>
                    <div class="form-row justify-content-center align-items-center ">
                        <div class="col-12 text-center my-1">
                            <label  for="inlineFormInputName">Name</label>
                            <input v-model="input.username" type="text" class="form-control" id="inlineFormInputName" placeholder="username" required>
                        </div>

                        <div class="col-12 text-center my-1 ">
                            <label  for="inlineFormPassword">Password</label>
                            <input v-model="input.password" type="password" class="form-control" id="inlineFormPassword" placeholder="password" required>
                        </div>

                        <div class="col-12 text-center my-1">
                            <button type="submit" class="btn text-center  ">Sign in</button>
                        </div>
                    </div>
                </form>    
                </div>        
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
                let url = "./admin/index.php?user=true";

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