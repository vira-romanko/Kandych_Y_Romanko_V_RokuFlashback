import UserComponent from './UserComponent.js';
export default {
	template: `
	<div class=" all-users">
	   <a href="#" class="col-12 m-4" >
	      <img class="img-fluid text-center" src="images/logos/logo_roku_main.svg" alt="logo" />
      </a>
		<div class="row">
			<div class="col-sm-12">
				<h1 class="user-message text-center m-3 ">{{ message }}</h1>
			</div>
		</div>

		<div class="row">
            <user v-for="(user, index) in userList" :liveuser="user" :key="index"/>
		</div>
		<button class=" profile-button text-center row  mt-5">Manage Profiles</button>
	</div>
	`,

	created: function () {
        this.fetchAllUsers();
	},

	data() {
		return {
			message: `Profiles`,

			userList: []
		}
	},
	methods:{
		fetchAllUsers(){
			let url = './admin/admin_getusers.php?allusers=ture';
			fetch(url)
			.then(res => res.json())
			.then(data => this.userList = data)
			.catch((error)  => console.error(error))
		}
	},
	components:{
		user: UserComponent
	}
}