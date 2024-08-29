<script setup>
import { useCounterStore } from "~/stores/useCounterStore";

const { locale, setLocale } = useI18n();
const { t } = useI18n()
const counter = useCounterStore();

useSeoMeta({
    title: t("home.title"),
    ogTitle: t("home.title"),
    description: t("home.description"),
    ogDescription: t("home.description"),
    ogImage: "https://example.com/image.png",
});
</script>

<template>
    <div>
        <div class="container">
            <p>{{ $t("home.heading") }}</p>
            Store example: {{ counter.count }}
            <br />
            <div><button @click="counter.increment">Increment +</button></div>
            <div><button @click="counter.decrement">Decrement -</button></div>
            <div>Getter: {{ counter.doubledCount }}</div>
        </div>
    </div>
</template>
