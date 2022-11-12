import api from "../config/api";

export async function getRosters() {
    const response = await api.get('/rosters');
    return response.data;
}

export async function addRoster(newRoster) {
    const response = await api.post('/rosters', newRoster);
    console.log('received new roster from server: ', response.data);
    return response.data;
}

export async function deleteRoster(id) {
    const response = await api.delete(`/rosters/${id}`);
    return response.data;
}

export async function updateRoster(roster) {
    const response = await api.patch(`/rosters/${roster._id}`);
    console.log('received updated roster from server: ', response.data);
    return response.data;
}