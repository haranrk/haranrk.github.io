<template>
  <nav
    class="bg-blue-gray-800 z-10 text-white p-5 md:(flex items-center justify-between)"
  >
    <div class="flex text-2xl justify-between">
      <span class="z-10"> Haran Rajkumar </span>
      <span class="z-10">
        <MenuIcon @click="toggleMenu" class="w-7 inline-block md:hidden" />
      </span>
    </div>
    <ul
      class="flex flex-col bg-blue-gray-800 w-full py-4 pl-7 transform transition-all ease-in left-0 gap-2 duration-500 absolute md:(flex-row items-center z-auto static w-auto py-0 pl-0 opacity-100)"
      :class="`${
        showMenu ? 'opacity-100 -translate-y-0' : 'opacity-100 -translate-y-20'
      }`"
    >
      <li
        class="duration-500 ease-in"
        :class="`${
          showMenu ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-20'
        }`"
      >
        <a href="#" class="text-xl duration-500 z-0 hover:(text-gray-400)"
          >About</a
        >
      </li>
      <li
        class="duration-500"
        :class="`${
          showMenu ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-20'
        }`"
      >
        <a href="#" class="text-xl duration-500 z-0 hover:(text-gray-400)"
          >Timeline</a
        >
      </li>
    </ul>
  </nav>
  <div class="text-blue-500">Hi, I'm Haran Rajkumar</div>
  <div>
    I'm graduate student at Columbia University, pursuing a Masters in Mangement
    Science and Engineering. My past experiences involve developing
    <a
      class="text-orange-400 decoration-wavy underline decoration-2 hover:(bg-orange-400 text-white)"
      href="https://i.moneyforward.com/en/"
      >a B2B SaaS application
    </a>
    application and ML/AI Research.
  </div>
  <Test />
  <div class="flex gap-3">
    <SocialLink
      v-for="socialLink in socialLinks"
      v-bind:key="socialLink.name"
      :name="socialLink.name"
      :windiColor="socialLink.windiColor"
      :link="socialLink.link"
    />
  </div>
</template>
<script setup lang="ts">
import SocialLink from "@/components/SocialLink.vue";
import MenuIcon from "@/assets/icons/menu.svg?component";
import { ref } from "vue";

const showMenu = ref(true);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

onscroll = () => {
  showMenu.value = false;
};

const socialLinks = [
  {
    name: "Mail",
    windiColor: "red-500",
    link: "mailto:haran.r@columbia.edu",
  },
  {
    name: "LinkedIn",
    windiColor: "blue-500",
    link: "https://www.linkedin.com/in/haranrk/",
  },
  {
    name: "Github",
    windiColor: "black",
    link: "https://github.com/haranrk",
  },
  {
    name: "StackOverflow",
    windiColor: "orange-500",
    link: "https://stackoverflow.com/users/6523063/haran-rajkumar",
  },
  {
    name: "Google Scholoar",
    windiColor: "teal-500",
    link: "https://scholar.google.com/citations?user=ixDg0P4AAAAJ&hl=en",
  },
];
</script>
