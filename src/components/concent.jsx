import React from "react";
const TermsAgreementForm = () => {
    const [isagreed, setIsagreed] = React.useState(false);
    const handleChange = (e) => {
        setIsagreed(e.target.checked);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Submitted");
    };
    return(
        <form onSubmit={handleSubmit}>
            <label>
                <input type="checkbox" checked={isagreed} onChange={handleChange} />
                I agree to the terms and conditions
            </label>
            <br />
            <button type="submit" disabled={!isagreed}>Submit</button>
        </form>
    );
};

export default TermsAgreementForm;