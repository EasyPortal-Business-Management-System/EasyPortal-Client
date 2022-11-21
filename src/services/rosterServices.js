import easyportalAPI from "../config/api";

export const employees = [
    { id: 1, name: "Jenny", monday: "9am-5pm", tuesday: "9am-5pm", wednesday: "9am-5pm", 
    thursday: "9am-5pm", friday: "9am-5pm", saturday: "", sunday: ""},
    { id: 2, name: "Kenny", monday: "9am-5pm", tuesday: "9am-4pm", wednesday: "9am-4pm", 
    thursday: "9am-4pm", friday: "9am-4pm", saturday: "", sunday: ""},
    { id: 3, name: "Lilly", monday: "9am-5pm", tuesday: "9am-3pm", wednesday: "9am-5pm", 
    thursday: "9am-5pm", friday: "9am-3pm", saturday: "", sunday: ""},
    { id: 4, name: "Jill", monday: "9am-5pm", tuesday: "10am-5pm", wednesday: "9am-5pm", 
    thursday: "9am-5pm", friday: "9am-5pm", saturday: "", sunday: ""},
    { id: 5, name: "Jack", monday: "10am-5pm", tuesday: "9am-5pm", wednesday: "9am-5pm", 
    thursday: "9am-5pm", friday: "9am-5pm", saturday: "", sunday: ""}
  ]

function transformRoster(employee) {
    let transformedRoster = {
        name: employee.name, 
        monday: employee.monday,
        tuesday: employee.tuesday,
        wednesday: employee.wednesday,
        thursday: employee.thursday,
        friday: employee.friday,
        saturday: employee.saturday,
    }
    return transformedRoster;
}

export async function getRosters() {
    // const response = await easyportalAPI.get('/rosters');
    return employees;
}

export async function getRoster(id) {
    // const response = await easyportalAPI.get(`/rosters/${id}`);
    // let roster = response.data;
    const employee = employees.find(employee => employee.id.toString() === id.toString())
    return employee ? transformRoster(employee) : null
}

export async function createRoster(employee) {
	// const response = await easyportalAPI.post('/rosters/new', roster);
	// return response.data;
    return employee;
}

export async function deleteRoster(id) {
	// const response = await easyportalAPI.delete(`/rosters/${id}`);
	// return response.data;
    return id;
}

export async function updateRoster(id) {
	// let updatedRoster = {
	// 	roster: employee.roster
	// }
	// const response = await easyportalAPI.put(`/rosters/${id}`, updatedRoster);
	// return response.data;
    return id;
}