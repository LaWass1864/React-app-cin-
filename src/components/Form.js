import React, { useState } from 'react';

const Form = ({ handleSearch }) => {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" placeholder="Search for a movie" />
                    <input type="submit" value="Rechercher" />
                </form>
            </div>
        </div>
    );
};

export default Form;
