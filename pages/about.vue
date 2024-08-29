<script setup>
const { locale, setLocale } = useI18n()
const { t } = useI18n()

useSeoMeta({
    title: t("about.title"),
    ogTitle: t("about.title"),
    description: t("about.description"),
    ogDescription: t("about.description"),
    ogImage: "https://example.com/image.png",
});
</script>

<template>
  <div>
    <div class="container">
      <p>{{ $t('about.heading') }}</p>
    </div>
  </div>
</template>
