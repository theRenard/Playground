import { NuxtState, Context } from "@nuxt/types/app";
import axios from "axios";
import { Post } from "~/@types/posts";

export const state: NuxtState = () => ({
  isNavOpen: false,
  posts: [] as Post[],
})

export const mutations = {
  toggleNav(state: NuxtState) {
    state.isNavOpen = !state.isNavOpen;
  },
  setPosts(state: NuxtState, posts: Post[]) {
    state.posts = posts;
  }
}

export const actions = {
  nuxtServerInit(vuexContext: Context['store'], _context: Context): Promise<void> {
    return axios
      .get('https://playground-7b3c6-default-rtdb.firebaseio.com/')
      .then(res => {
        const postArray: any = [];
        for (const key in res.data) {
          postArray.push({ ...res.data[key], id: key });
        }
        vuexContext.commit('setPosts', postArray)
      })
      .catch(err => console.log(err))

  }
}