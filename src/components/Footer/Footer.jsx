import React from 'react';
import './Footer.css'; // Asegúrate de tener este archivo CSS
import profileImage from '../../assets/mathe.jpg'; // Ruta a tu foto de perfil
import discordLogo from '../../assets/Discord.png'; // Ruta al logo de Discord
import instagramLogo from '../../assets/Instagram.png'; // Ruta al logo de Instagram
import githubLogo from '../../assets/GitHub.png'; // Ruta al logo de GitHub

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-box">
                    <img src={profileImage} alt="Tu Discord" className="discord-image" />
                    <p>Mathee</p>
                    <p className="role">Developer</p>
                    <div className="social-links">
                        <a href="https://www.instagram.com/mathe.albarra/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramLogo} alt="Instagram" className="social-logo" />
                        </a>
                        <a href="https://github.com/MatheoAlbarracin" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub" className="social-logo" />
                        </a>
                    </div>
                </div>
            </div>
            <a href="https://discord.gg/8G2CpzX7uS" target="_blank" rel="noopener noreferrer" className="discord-link">
                <img src={discordLogo} alt="Discord Logo" className="discord-logo" />
            </a>
        </footer>
    );
};

export default Footer;
