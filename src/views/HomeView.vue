<template>
  <nav
    class="bg-blue-gray-800 z-10 text-white p-5 md:(flex items-center justify-between)"
  >
    <div class="flex text-2xl justify-between">
      <span class="z-10"> Haran Rajkumar </span>
      <span class="z-10">
        <MenuIcon
          @click="toggleMenu"
          class="w-7 fixed inline-block transform origin-center duration-500 md:hidden"
          :class="showMenu ? 'opacity-0 scale-0' : 'opacity-100 scale-100'"
        />
        <CloseIcon
          @click="toggleMenu"
          class="w-7 inline-block duration-500 transform origin-center md:hidden"
          :class="showMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
        />
        <!-- <CloseIcon @click="toggleMenu" class="w-7 inline-block md:hidden" /> -->
      </span>
    </div>
    <ul
      class="flex flex-col bg-blue-gray-800 w-full py-4 pl-7 transform transition-all ease-in-out left-0 gap-2 duration-500 absolute md:(flex-row items-center z-auto static w-auto py-0 pl-0 opacity-100 translate-x-0)"
      :class="`${
        showMenu ? 'opacity-100 -translate-x-0' : 'opacity-100 -translate-x-150'
      }`"
    >
      <li>
        <a href="#" class="text-xl duration-500 z-0 hover:(text-gray-400)"
          >About</a
        >
      </li>
      <li>
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
    <Link name="A B2B SaaS application" windiColor="orange-500" link="#"></Link>
    <a
      class="underline decoration-5 text-purple-400 hover:(bg-purple-400 text-white underline decoration-purple-400)"
      >A B2B SaaS
    </a>
    application and ML/AI Research.
  </div>
  <Test />
  <div class="flex gap-3">
    <Link
      v-for="socialLink in socialLinks"
      v-bind:key="socialLink.name"
      :name="socialLink.name"
      :windiColor="socialLink.windiColor"
      :link="socialLink.link"
    />
  </div>
</template>
<script setup lang="ts">
/// <reference types="vite-svg-loader" />
import Link from "@/components/Link.vue";
import MenuIcon from "@/assets/icons/menu.svg?component";
import CloseIcon from "@/assets/icons/close.svg?component";
import { ref } from "vue";

const showMenu = ref(false);

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
