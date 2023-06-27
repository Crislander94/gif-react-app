import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getGifs } from '../helpers';

export const useFetchGifs = ( category ) => {

    const [newImages, setNewImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setNewImages( newImages );
        setIsLoading( false );
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        newImages,
        isLoading
    }
}


useFetchGifs.propTypes = {
    category: PropTypes.string.isRequired
}