import {makeAutoObservable} from "mobx";
import Cookies from "js-cookie";


class User {
    login = '';
    password = '';
    role = '';
    isLogged = false;
    constructor() {
        makeAutoObservable(this);
        this.isLogged = Cookies.get('isLogged') ? true : sessionStorage.getItem('isLogged') ? true : false
        this.login = Cookies.get('login') ? Cookies.get('login') : sessionStorage.getItem('login') ? sessionStorage.getItem('login') : ''
        this.password = Cookies.get('password') ? Cookies.get('password') : sessionStorage.getItem('password') ? sessionStorage.getItem('password') : ''
        this.role = Cookies.get('role') ? Cookies.get('role') : sessionStorage.getItem('role') ? sessionStorage.getItem('role') : ''
    }



}

export default new User();