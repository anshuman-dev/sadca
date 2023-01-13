const BASE_URL = "http://localhost:3000"

export const getFile = async () =>{
    const response = await fetch(`${BASE_URL}/api/files`)
    const json = await response.json()
    return json;
}