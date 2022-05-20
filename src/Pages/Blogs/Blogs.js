import React from 'react';

const Blogs = () => {
    return (
        <article>
            <h3>Difference between authorization and authentication?</h3>
            <p>Authentication is determining a user who he claim to be but authorization related to accessing power of a user. Authentication is a process of validate credential but authorization works for the accessibility through policies. Authentication transmits info through an ID token. Authorization transmits info through an access token.</p>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>I am using firebase for authentication. Here have more options to implement authentication.
                The Okta Identity Cloud, WatchGaurd AuthPoint, Microsoft Azure Active Directory, Cisco Secure Access by Duo and LastPass for Business are mostly used to implement authentication. </p>
            <h3>What other services does firebase provide other than authentication?</h3>
            <p>NoSQL databases, real-time queries, scalable hosting, file storage, REST APIs, and analytics are the services that firebase provides other than authentication.</p>
        </article>
    );
};

export default Blogs;