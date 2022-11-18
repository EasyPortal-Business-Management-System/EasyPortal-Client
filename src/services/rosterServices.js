import easyportalAPI from "../config/api";

function transformRoster(roster) {
    let transformedRoster = {
        employee: roster.username, 
        day: roster.day,
        start_time: roster.start_time,
        finish_time: roster.finish_time
    }
    return transformedRoster;
}

export async function getRosters() {
    const response = await easyportalAPI.get('/rosters');
    return response.data;
}

export async function getRoster(id) {
    const response = await easyportalAPI.get(`/rosters/${id}`);
    let roster = response.data;
    return roster ? transformRoster(roster) : null
}

export async function createRoster(roster) {
	const response = await easyportalAPI.post('/rosters', roster);
	return response.data;
}

export async function deleteRoster(id) {
	const response = await easyportalAPI.delete(`/rosters/${id}`);
	return response.data;
}

export async function updateRoster(roster) {
	let updatedRoster = {
		description: roster.description
	}
	const response = await easyportalAPI.put(`/rosters/${roster.id}`, updatedRoster);
	return response.data;
}