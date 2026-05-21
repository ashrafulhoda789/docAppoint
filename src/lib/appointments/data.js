export const fetchAllDoctors = async(searchTerm = '') =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/alldoctors?search=${searchTerm}`)
    const data = await res.json();

    return data;
}