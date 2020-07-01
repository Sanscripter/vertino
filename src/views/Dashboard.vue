<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Argon/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import HelloWorld from '@/components/HelloWorld.vue';
import firebaseApp from "../firebaseApp";

@Component({
  components: {
    HelloWorld,
  },
})
export default class Dashboard extends Vue {
  mounted() {
    if (firebaseApp.auth().currentUser!.email) {
      console.log(firebaseApp.auth().currentUser!.email);
    }
  }
}
</script>
