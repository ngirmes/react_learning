import { useState, useEffect } from 'react';

const useFetch = (url) => { // Passing in url as a parameter so that useFetch can be used with different endpoints

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const[error, setError] = useState(null)
    

    // To retrieve data and catch network and data retrieval errors
    useEffect(() => {

        const abortCont = new AbortController();

        const fetchData = async () => {
            try {
                const response = await fetch(url, { signal: abortCont.signal }) //Returns a promise, second parameter is for catching abort errors
                const data = await response.json();
                if(!response.ok) {
                    throw Error('Request failed with status code ' + response.status) //Throws error if the response is not ok (!200)
                }
                setData(data); //Setting data variable with retrieved data
                setIsPending(false) //Removes loading message
                setError(null) //Set to null to avoid unnecessary error message
            }
            catch (error) {
                if (error.name === 'AbortError'){
                    console.log('fetch aborted test')
                    abortCont.abort();
                }
                else {
                setIsPending(false) //Removes loading message
                setError(error.message) //Sets error message
                }
            } 
        };

        fetchData();

    }, [url]); // Putting url as a dependency means whenever the url changes the function will re-run

    return { data, isPending, error }
}

export default useFetch