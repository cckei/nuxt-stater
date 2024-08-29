<script setup>
const { locale, locales, setLocale } = useI18n();
const route = useRoute();
</script>

<template>
    <header>
        <div class="container">
            <div class="flex justify-between">
                <nav>
                    <ul class="flex gap-4">
                        <li>
                            <nuxt-link to="/">{{
                                $t("home.heading")
                            }}</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/about">{{
                                $t("about.heading")
                            }}</nuxt-link>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul class="flex gap-4">
                        <li
                            :class="{ 'font-bold': locale == locale_item.code }"
                            v-for="locale_item in locales"
                            :key="locale_item.code"
                        >
                            <button @click="setLocale(locale_item.code)">
                                {{ locale_item.name }}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    @apply bg-gray-200;
}
</style>
