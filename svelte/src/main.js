import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world, this is svelte'
	}
});

export default app;