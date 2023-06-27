import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {newImages, isLoading} = useFetchGifs( category );

    return (
        <div key={ category }>
            <h3>{ category }</h3>
            
            {isLoading && <h2>Cargando...</h2>}
            
            <div className='card-grid'>
                {newImages.map( (image) => (
                    <GifItem 
                        key={image.id}
                        {...image}
                    />
                ))}
            </div>
        </div>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}