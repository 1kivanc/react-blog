import React from "react";
import './styles.css';

const CommnetBox = () => (
    <commentbox>
        <form className="comment-box">
            <header>
                <h2>Yorum yap</h2>
           </header>
    
            <textarea className="comment" cols="30" rows="10" placeholder="Yorum yap..."></textarea>
            <br />
            <input type="submit" value="Paylaş" />
        </form>

    </commentbox>
);

export default CommnetBox;