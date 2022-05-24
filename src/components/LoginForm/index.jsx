import React from "react";
import './styles.css';

const LoginForm = () => (
    <loginform >
        <div className="login-form">
            <h1>Giriş Yap</h1>
        <label htmlFor="userName">Kullanıcı Adı</label>
        <input type="text" placeholder="Kullanıcı Adı" name="userName"/>
        <label htmlFor="pass">Parola</label>
        <input type="password" name="pass" placeholder="Parola" />
        <input type="checkbox" name="benihatırla" />
        <label htmlFor="benihatırla">Beni hatırla</label>
        <input type="submit" value="Gönder" />
        <br />
        <a href="#">Parolamı unuttum</a>
        </div>
    </loginform>
);

export default LoginForm;