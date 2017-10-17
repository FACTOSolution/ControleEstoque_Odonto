function UserStorage(){
	var localStorage = window.localStorage;

	this.save = function (user,callback){
		localStorage.setItem([user]);
	}
	this.search = function (name,callback){
		var user = localStorage.getItem(name);
	}
	this.remove = function (name,callback){
		localStorage.removeItem(name);
	}
}