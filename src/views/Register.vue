<template>
  <div class="register h-window">
    <AccountForm intent="Register"></AccountForm>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';
import AccountForm from '@/components/AccountForm.vue';


@Component({
  components: {
    AccountForm,
  },
})
export default class Register extends Vue {
}
</script>
