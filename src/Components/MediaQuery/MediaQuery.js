import {useEffect, useState} from "react";


function MediaQuery(query) {
    const [matches, setMatches] = useState([]);

    useEffect(()=> {
        const media = window.matchMedia(query);

        if(media.matches !== matches) setMatches(media.matches);


        const listener = () => setMatches(media.matches);

        media.addListener(listener);

        return () => media.removeListener(listener);
        // 0091438563

    },[query, matches]);

    return matches;
    
}

export default MediaQuery;