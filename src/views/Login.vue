<template>
  <div class="register h-window">
    <AccountForm intent="Login"></AccountForm>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import AccountForm from "@/components/AccountForm.vue";

@Component({
  components: {
    AccountForm,
  },
})
export default class Login extends Vue {}
</script>
