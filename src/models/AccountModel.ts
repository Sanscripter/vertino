export default class AccountModel {
    public name?: string;

    public password?: string;

    public email?: string;

    constructor(obj?: any) {
      this.name = obj.name ? obj.name : '';
      this.password = obj.password ? obj.password : '';
      this.email = obj.email ? obj.email : '';
    }
}
