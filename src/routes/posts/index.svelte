<script context="module">
import { enhance } from '$lib/form';
import Config from '../../../app_config'

// see https://kit.svelte.dev/docs#loading
export const load = async ({ fetch }) => {
  const res = await fetch('/posts.json');
  if (res.ok) {
    const posts = await res.json();
    return {
      props: { posts: posts.items }
    };
  }
  const { message } = await res.json();
  return {
    error: new Error(message)
  };
};
</script>

<script>
import { scale } from 'svelte/transition';
import { flip } from 'svelte/animate';

export let posts;
//var cfg = Config.get_config()
// console.log(cfg)

</script>

<style>
.body_wrap{ position:relative; }
.badge_post{
  position:absolute; top:-15px; left:10px; 
}    
</style>

<svelte:head>
	<title>Posts</title>
</svelte:head>
<!-- -->
<div class="body_main_wrap">
  <h1>Posts</h1>
  <hr />
  {#each posts as item}
  <a href={`/posts/${item.save_id}`}><h3>{item.title}</h3>
  </a>
  ID : {item.id}
  <a href={`/posts/${item.save_id}`} class="btn">[ show ]
  </a>
  <hr />
  {/each}          
</div>

