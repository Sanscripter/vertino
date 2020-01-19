<template>
  <div class="form account-form horiz items-center h-full">
    <form novalidate class="md-layout md-elevation-6 w-400 h-400">
      <md-card-header>
        <h1 class="md-title">{{intent}}</h1>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-gutter">
          <div v-if="isRegistration" class="md-layout-item md-small-size-100">
            <md-field>
              <label for="first-name">Name</label>
              <md-input
                name="first-name"
                id="first-name"
                autocomplete="given-name"
                v-model="account.name"
              />
              <span class="md-error">The first name is required</span>
              <span class="md-error">Invalid first name</span>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="email">Email</label>
              <md-input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                v-model="account.email"
              />
              <span class="md-error">The email is required</span>
              <span class="md-error">Invalid email</span>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100">
            <md-field>
              <label for="first-name">Password</label>
              <md-input
                name="first-name"
                type="password"
                id="first-name"
                autocomplete="password"
                v-model="account.password"
              />
              <span class="md-error">The first name is required</span>
              <span class="md-error">Invalid first name</span>
            </md-field>
          </div>
        </div>
      </md-card-content>
      <div class="horiz items-right w-full">
        <md-button class="md-raised md-primary" @click="submit">Submit</md-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import AccountModel from "../models/AccountModel";
import firebaseApp from "../firebaseApp";
import { AccountFormIntents } from "../enums/AccountFormIntents.enum";

@Component
export default class AccountForm extends Vue {
  @Prop() private intent!: string;

  @Emit("formSubmit") private submit() {
    console.log(this.account);
    console.log(this.isRegistration);
    return this.account;
  }

  public account = new AccountModel({});


  private get isRegistration() {
    return this.intent === AccountFormIntents.REGISTRATION;
  }
}
</script>
