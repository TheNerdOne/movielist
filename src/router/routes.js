export default [
    {
        path: '/',
        name: 'list',
        component: () => import('../views/list/Index'),
    }, {
        path: '/detail/:slug',
        name: 'movie',
        component: () => import('../views/Detail'),
    }]