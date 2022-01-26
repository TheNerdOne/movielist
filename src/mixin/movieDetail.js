import { moviesDataProvider } from "../services/movies";
export const movieDetail = {
    data() {
        return { movieData: null, credits: null };
    },
    computed: {
        movieID() {
            return this.$route.params.slug;
        },
    },
    methods: {
        compare(a, b) {
            if (a.popularity < b.popularity) {
                return 1;
            }
            if (a.popularity > b.popularity) {
                return -1;
            }
            return 0;
        },
        getDetail(payload) {
            moviesDataProvider.getMovieDetail(payload).then((res) => {
                this.movieData = res.data;
            });
        },
        getCredits(payload) {
            moviesDataProvider.getMovieCredits(payload).then((res) => {
                this.credits = res.data
            }).then(()=>{
                this.credits.cast = this.credits.cast.sort(this.compare)
            });
        },
    },

    mounted() {
        this.getDetail(this.movieID);
        this.getCredits(this.movieID);
    },
}
