<template>
  <div class="container fullscreen">
    <div
      class="align-items-center flex-column h-100 justify-content-center row"
    >
      <div class="col-12 mb-5">
        <Button @click="selectLanguage('ar')" class="col-6" :color="'secondary'"
          >اللغة العربية</Button
        >
      </div>
      <div class="col-12">
        <Button @click="selectLanguage('en')" class="col-6">English</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@/components/iButton.vue";
import { useStore } from "vuex";
import store from "@/store";
import router from "@/router";
import i18n from "@/i18n";

export default defineComponent({
  components: {
    Button,
  },
  methods: {
    selectLanguage(lang: string) {
      if (lang == "ar") {
        document.documentElement.style.direction = "rtl";
      }
      store.commit("setLanguage", lang);
      i18n.global.locale = lang;
      router.push("destination");
    },
  },
});
</script>
