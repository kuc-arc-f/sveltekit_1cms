<script context="module">

import Config from '../../../app_config'

export const load = async ({ page, fetch }) => {
  const res = await fetch(`/posts/${page.params.slug}.json`);
  if (res.ok) {
    const post = await res.json();
//console.log(posts.items )
    return {
      props: { post: post }
    };
  }

};
</script>

<script>
	export let post;
console.log(post)
</script>

<style>
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="container bg-light">
  <h1>{post.title}</h1>
  <hr />
  {post.content}
</div>
