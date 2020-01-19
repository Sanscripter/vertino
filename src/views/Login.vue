<template>
  <div class="register h-window">
    <AccountForm :intent="formIntent"></AccountForm>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AccountForm from "@/components/AccountForm.vue";
import { AccountFormIntents } from "../enums/AccountFormIntents.enum";


@Component({
  components: {
    AccountForm,
  },
})
export default class Login extends Vue {
  private formIntent = AccountFormIntents.LOGIN;
}

</script>
