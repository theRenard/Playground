import { NuxtState } from "@nuxt/types/app";

export const state = () => ({
  isNavOpen: false,
})

export const mutations = {
  toggleNav(state: NuxtState) {
    state.isNavOpen = !state.isNavOpen;
  },
}
