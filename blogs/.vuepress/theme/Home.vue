<template>
<div id="home">
  <h2>我的文章</h2>

  <ul class="posts">
    <li v-for="post in $site.pages"
        v-if="post.regularPath.startsWith('/_posts')">
      <router-link
            :to="post.path"
          >
            {{ post.title || post.path }}
          </router-link>
    </li>
  </ul>
</div>
</template>

