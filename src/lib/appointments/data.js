export const fetchAllDoctors = async(searchTerm = '') =>{
    const res = await fetch(`http://localhost:5000/alldoctors?search=${searchTerm}`)
    const data = await res.json();

    return data;
}