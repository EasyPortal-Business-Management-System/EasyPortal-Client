import easyportalAPI from '../config/api';

export async function loginUser(userData) {
	const response = await easyportalAPI.post('/users/sign-in', userData)
	const responseMongoDB = await easyportalAPI.post('/employees/', userData)
	console.log ("response is (signIn): ", response)
	console.log ("response data is (SignIn): ", userData)
	return (response.data, responseMongoDB.data);
}

export async function logoutUser() {
	return easyportalAPI.post('/users/sign-out/:uid');
}

// delete function api
export async function deleteUser() {

	return ((easyportalAPI.delete('/users/delete/:uid')),
	(easyportalAPI.delete('/employees/:postID')) )
}

export async function registerUser(userInfo) {
	const responseFirebase = await easyportalAPI.post('/users/sign-up', userInfo)
	
	console.log ("response is (signUp): ", responseFirebase)
	console.log ("response data is (SignUp): ", userInfo)
	return responseFirebase.data;
}

// Get loggedInUser from localStorage
export function getLoggedInUser() {
	return localStorage.getItem('loggedInUser');
}
export function getAdminUser() {
	return localStorage.getItem('adminUser');
}

export function getUID() {
	return localStorage.getItem('uid');
}

// Store loggedInUser displayName in local storage
export function setLoggedInUser(user) {
	console.log('setting user: ', user);
	user
		? localStorage.setItem('loggedInUser', user)
		: localStorage.removeItem('loggedInUser');
}

export function setAdminUser(admin) {
	console.log('setting admin: ', admin);
	admin
		? localStorage.setItem('adminUser', admin)
		: localStorage.removeItem('adminUser');
}

export function setUID(uid) {
	console.log('uid: ', uid);
	uid
		? localStorage.setItem('uid', uid)
		: localStorage.removeItem('uid');
}