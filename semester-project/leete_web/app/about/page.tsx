import React from "react";
import "./About.css";

export default function About() {
    return (
        <main className="about-container">
            <section className="about-header">
                <h1>About LEETE</h1>
            </section>
            <section className="about-content">
            <img src="/2-1@3x.jpg" alt="LEETE" className="about-image" />
                <div className="about-description">
                    <p>
                        LEETE, a renowned DJ based in Split, Croatia, has been captivating audiences with his unique blend of electronic beats and mesmerizing rhythms. With a passion for music that resonates with every performance, LEETE has established himself as a prominent figure in the local and international DJ scene.
                    </p>
                    <p>
                        His journey began in the vibrant streets of Split, where he discovered his love for music. Over the years, LEETE has honed his skills, experimenting with various genres and creating a signature sound that is both innovative and timeless.
                    </p>
                    <p>
                        Whether performing at local clubs or international music festivals, LEETEs sets are an immersive experience, taking listeners on a journey through sound and emotion. His dedication to his craft and his ability to connect with his audience make him a must-see act for any music enthusiast.
                    </p>
                </div>
            </section>
        </main>
    );
}
