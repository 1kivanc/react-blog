import React from "react";
import './styles.css';

const Contact = () => (
    <contact className="Contact-form">
        <div className="form">
            <h1>Bize katıl</h1>
        </div>
        <form>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="AdSoyad">Ad Soyad</label>
                </div>
                <div className="col-75">
                    <input type="text" name="AdSoyad" placeholder="Ad Soyad" />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="Email">Email</label>
                </div>
                <div className="col-75">
                    <input type="email" name="Email" placeholder="Email" />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="Mesaj">Mesaj</label>
                </div>
                <div className="col-75">
                    <textarea name="Mesaj"  cols="30" rows="10" placeholder="Mesaj..."></textarea>
                </div>
            </div>
            <div className="row">
                <input type="submit" value="Gönder" />
            </div>
        </form>
    </contact>
);


export default Contact;
    


