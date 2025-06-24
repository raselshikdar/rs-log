<script lang="ts" setup>
import BlogHomeOverview from './BlogHomeOverview.vue'
import BlogHotArticle from './BlogHotArticle.vue'
import BlogHomeTags from './BlogHomeTags.vue'
import BlogFriendLink from './BlogFriendLink.vue'
</script>

<template>
  <div class="blog-info" data-pagefind-ignore="all">
    <!-- 统计数据，日后支持，点击筛选出左侧的数据 -->
    <BlogHomeOverview />

    <!-- 置顶的一些文章 -->
    <BlogHotArticle />

    <!-- 友链 -->
    <ClientOnly>
      <BlogFriendLink />
    </ClientOnly>

    <!-- 标签 -->
    <BlogHomeTags />

    <!-- Solidarity message with custom tooltip -->
    <div class="solidarity-widget-wrapper">
      <a
        class="solidarity-widget"
        href="https://www.palestinecampaign.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        🇵🇸 <strong>Solidarity with Palestine</strong>
        <span class="tooltip">Click to support Palestine</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-info {
  display: flex;
  flex-direction: column;
  min-width: 240px;
  position: relative;
  box-sizing: border-box;
}

@media screen and (min-width: 767px) {
  .blog-info {
    width: 280px;
  }
}

.solidarity-widget-wrapper {
  position: relative;
  margin-top: 1.2rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 240px;
}

.solidarity-widget {
  display: block;
  padding: 0.75rem 1rem;
  font-size: 14px;
  text-align: center;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  transition: background-color 0.3s, color 0.3s;
  position: relative;

  &:hover {
    background-color: var(--vp-c-bg-alt);
    color: var(--vp-c-brand-1);
  }

  &:hover .tooltip {
    opacity: 1;
    visibility: visible;
    transform: translateY(-6px);
  }
}

.tooltip {
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 6px 10px;
  font-size: 12px;
  border-radius: 4px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
  z-index: 10;
}
</style>
