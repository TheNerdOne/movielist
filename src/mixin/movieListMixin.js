import { moviesDataProvider } from "../services/movies";

export const movieListMixin = {
    data() {
        return {
            movieData: {},
            pagesData: {},
            currentPage: 1,
            movieListKey: 0,
            genres: null,
            show:false
        };
    },
    methods: {
        getAllGenres() {
            moviesDataProvider.getAllGenres().then((res) => {
                this.genres = res.data.genres
            })
        },
        nextPage() {
            this.currentPage < this.pagesData.totalPages && this.currentPage++;
        },
        prevPage() {
            this.currentPage > 1 && this.currentPage--;
        },
        goToDetail(payload) {
            this.$router.push({ path: `/detail/${payload}` });
        },
        DateFilter(payload) {
            if (payload && payload.length !== 0) {
                this.$router.push({ path: `/?gte=${payload[0]}&lte=${payload[1]}` });
                this.getData({
                    "release_date.gte": payload[0],
                    "release_date.lte": payload[1],
                    page: 1,
                });
                this.currentPage = 1;
                this.movieListKey += 1;
            }
        },
        getData(payload) {
            moviesDataProvider.getAllMovies(payload && payload).then((res) => {
                this.movieData = res.data.results;
                this.pagesData.totalPages = res.data.total_pages;
                this.pagesData.totalCount = res.data.total_results;
            }).then(()=>{
                setTimeout(() => {
                    this.matchGenres()
                    this.movieListKey += 1;
                }, 200);
            });
        },
        clearDatePicker(payload) {
            if (payload.length == 0) {
                this.$router.push({ path: "/" });
                this.getData({
                    page: 1,
                });
            }
        },
        matchGenres() {
            this.movieData.map((movie, idx) => {
                this.movieData[idx].genres = []
                movie.genre_ids.map(genre => {
                    this.movieData[idx].genres.push(this.genres.find(e => e.id == genre))
                })
            })
            this.show = true
        }
    },
    watch: {
        currentPage(newPage, oldPage) {
            if (newPage === oldPage) return;
            if (newPage > 1) {
                movieListMixin.data.currentPage = parseInt(newPage);
            } else {
                movieListMixin.data.currentPage = 1;
            }
            this.$router.push({
                path: `/?${this.$route.query.gte
                    ? `gte=${this.$route.query.gte}&lte=${this.$route.query.lte}&`
                    : ""
                    }page=${movieListMixin.data.currentPage}`,
            });
            this.getData({
                "release_date.gte": this.$route.query.gte,
                "release_date.lte": this.$route.query.lte,
                page: parseInt(newPage),
            });
        },
    },
    mounted() {
        this.getAllGenres()
        if (Object.keys(this.$route.query).length == 0) {
            this.getData();
        } else {
            this.currentPage = this.$route.query.page
            if (this.$route.query.gte) {
                this.getData({
                    "release_date.gte": this.$route.query.gte,
                    "release_date.lte": this.$route.query.lte,
                    page: this.$route.query.page,
                })
            }
        }
    },
}