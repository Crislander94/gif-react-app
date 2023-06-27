export const getGifs = async(category) => {
    try{
        const url       = `https://api.giphy.com/v1/gifs/search?api_key=bNgPOURF81ek51r6W1yw0JoCuMaKHheV&q=${category}&limit=10`;
        const resp      = await fetch(url);
        const { data = [] }  = await resp.json();
        const gifs = data.map( img => ({
            id : img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
        return gifs;

    }catch(e){
        console.error(e);
    }

}