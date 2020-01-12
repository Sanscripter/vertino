<template>
  <div class="form account-form horiz items-center h-full">
    <form novalidate class="md-layout md-elevation-6 w-400 h-400">
      <md-card-header>
        <h1 class="md-title">{{intent}}</h1>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="first-name">Name</label>
              <md-input name="first-name" id="first-name" autocomplete="given-name" />
              <span class="md-error">The first name is required</span>
              <span class="md-error">Invalid first name</span>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="email">Email</label>
              <md-input type="email" name="email" id="email" autocomplete="email" />
              <span class="md-error">The email is required</span>
              <span class="md-error">Invalid email</span>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="first-name">Password</label>
              <md-input name="first-name" id="first-name" autocomplete="given-name" />
              <span class="md-error">The first name is required</span>
              <span class="md-error">Invalid first name</span>
            </md-field>
          </div>
        </div>
      </md-card-content>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import firebaseApp from "../firebaseApp";

@Component
export default class AccountForm extends Vue {
  @Prop() private intent!: string;

  // public account: AccountModel;

  created() {
    console.log("oh hi mark");
    this.submit();
  }

  public submit() {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword("guligui@gu.com", "passssss")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
</script>
