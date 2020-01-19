<template>
  <div class="register h-window">
    <AccountForm :intent="formIntent" v-on:formSubmit="register"></AccountForm>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AccountForm from "@/components/AccountForm.vue";
import firebaseApp from "../firebaseApp";
import { AccountFormIntents } from "../enums/AccountFormIntents.enum";
import AccountModel from '../models/AccountModel';


@Component({
  components: {
    AccountForm,
  },
})
export default class Register extends Vue {
  private formIntent = AccountFormIntents.REGISTRATION;

  public register(accountData: AccountModel|any) {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(accountData.email, accountData.password)
      .then((accountCreationResponse) => {
        console.log(accountCreationResponse);
        firebaseApp.firestore().collection('users').add({ ...accountData })
          .then((documentCreationResponse) => {
            console.log(documentCreationResponse);
            firebaseApp.auth().signInWithEmailAndPassword(accountData.email, accountData.password)
              .then((accountSignInResponse) => {
                console.log(accountSignInResponse);
                this.$router.push("/dashboard");
              });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>
