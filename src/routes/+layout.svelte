<script>
	import Meta from '../components/Meta.svelte';
	import '../app.postcss';
	import Layout from '../components/Layout.svelte';
</script>

<Meta title />
<Layout>
	<slot />
</Layout>
