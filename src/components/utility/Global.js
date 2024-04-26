
export const fetchData = async (endpoint, setData, setError) => {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
    } catch (err) {
        setError(err.message);
    }
};

export const deleteList = async (animeId, getProducts) => {
    try {
        const confirmation = window.confirm('Are you sure you want to delete this item?');
        if (!confirmation) {
            return;
        }
        const response = await fetch(`http://localhost:5000/anime/${animeId}`, {
            method: 'DELETE',
        });
        window.location.reload();
        if (response.ok) {
            console.log('Product deleted successfully.');
            getProducts();
        } else {
            console.error('Failed to delete product.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID');
};

