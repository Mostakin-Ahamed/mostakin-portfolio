import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Social = () => {
    const socialIcons = [
        <FaGithub key="github" />,
        <FaLinkedinIn key="linkedin" />,
        <FaTwitter key="twitter" />,
        <SiUpwork key="upwork" />,
        <SiGmail key="mail" />,
    ];

    const socialAnchors = [
        'https://github.com/ruksana03',
        'https://www.linkedin.com/in/atia-ruksana-978015245/',
        '',
        '',
        'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox',
    ];

    return (
        <>
            <div className='flex gap-4 justify-between border border-white mx-1 py-1 rounded-full px-12'>
                {socialIcons.map((socialIcon, index) => (
                    <a
                        key={index}
                        href={socialAnchors[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ background: 'linear-gradient(to right, ##000000 10%, ##0C1727 30%, #16263E 100%)', color: 'white' }}
                        className="rounded-full p-1 shadow-md shadow-white"
                    >
                        {socialIcon}
                    </a>

                ))}
            </div>
        </>
    );
};

export default Social;
