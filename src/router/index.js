import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import JobsView from '@/views/JobsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobView from '@/views/JobView.vue';
import AddJobView from '@/views/AddJobView.vue';
import EditJobView from '@/views/EditJobView.vue';
import { useStore } from 'vuex';

const beforeEnter = (to, from, next) => {
    const store = useStore();

    if (store.state.isAdmin) {
        next();
    } else {
        next({
            name: 'home',
            query: { redirect: to.fullPath },
        });
    }
}

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: JobsView,
		},
		{
			path: '/job/:id',
			name: 'job-view',
			component: JobView,
		},
		{
			path: '/jobs/add',
			name: 'jobs-add',
			component: AddJobView,
            beforeEnter
		},
		{
			path: '/jobs/edit/:id',
			name: 'jobs-edit',
			component: EditJobView,
            beforeEnter
		},
		{
			path: '/:catchAll(.*)',
			name: 'not-found',
			component: NotFoundView,
		},
	],
});

export default router;
