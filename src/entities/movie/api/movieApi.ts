import { axiosInstance } from '@shared/api/axiosInstance';

export const getPopularMovies = async () => {
    const response = await axiosInstance.get('/movie/popular');
    return response.data.results;
};

export const getMovieById = async (id: string) => {
    const response = await axiosInstance.get(`/movie/${id}`, {
        params: {
            append_to_response: 'credits',
        },
    });
    return response.data;
};
