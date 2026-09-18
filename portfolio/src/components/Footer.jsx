import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>

        <div className="footer-socials">
          <a href="https://github.com/">
            <FiGithub />
          </a>

          <a href="https://linkedin.com/">
            <FiLinkedin />
          </a>
        </div>

        <p className="made-with">
          Made with <FiHeart /> using React
        </p>
      </div>
    </footer>
  );
}
