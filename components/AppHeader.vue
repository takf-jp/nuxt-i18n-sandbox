<template>
    <header class="Header">
        <div class="links">
            <NuxtLink :to="$i18n.path('')">
                {{ $t('links.home') }}
            </NuxtLink>
            <NuxtLink :to="$i18n.path('about')">
                {{ $t('links.about') }}
            </NuxtLink>
            <NuxtLink v-if="$i18n.locale === 'ja'" :to="`/en` + $route.fullPath">
                {{ $t('links.en') }}
            </NuxtLink>
            <NuxtLink v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')">
                {{ $t('links.ja') }}
            </NuxtLink>
        </div>
    </header>
</template>

<script>
export default {}
</script>

<style scoped>

</style>