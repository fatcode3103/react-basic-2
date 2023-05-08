import axios from 'axios';
import { useEffect, useState } from 'react';

function useFetch(url) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                let res = await axios.get(url);
                let data = res && res.data ? res.data : [];
                if (data) {
                    setLoading(false);
                }
                setData(data);
            } catch (e) {
                alert(e.message);
            }
        }
        fetchData();
    }, [url]);
    return { data, loading };
}

export default useFetch;
