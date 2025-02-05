const Footer = () => {
  // Footer data object
  const footerobj = [
    {
      footerlefttittle: 'Eye-opening',
      footerrighttittle: 'Presentations',
      socialLinks: [
        { name: 'Instagram', url: 'https://www.instagram.com/ochi_design/' },
        { name: 'Behance', url: 'https://www.behance.net/ochi_design' },
        { name: 'Facebook', url: 'https://www.facebook.com/people/OCHI-presentation-design/100067218942460/#' },
        { name: 'Linkedin', url: 'https://www.linkedin.com/company/ochi-design/' },
      ],
      addresses: [
        { text: '202-1965 W 4th Ave, Vancouver, Canada',  },
      ],
      email: [
        { text: 'hello@ochi.design', url: 'mailto:http://hello@ochi.design' },
      ],
    },
  ];

  return (
    <>
      {footerobj.map((elem, index) => (
        <div key={index} className="footer">
          <div className="footerleft">
            <h1>{elem.footerlefttittle}</h1>
          </div>

          <div className="footerright">
            <h1>{elem.footerrighttittle}</h1>

            {/* Social Links */}
            <div className="social-links">
              {elem.socialLinks.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                  <h6>{link.name}</h6>
                </a>
              ))}
            </div>

            {/* Addresses */}
            <div className="addresses">
              {elem.addresses.map((address, idx) => (
                <a key={idx} href={address.url} target="_blank" rel="noopener noreferrer">
                  <h6>{address.text}</h6>
                </a>
              ))}
            </div>

            {/* Email */}
            <div className="email">
              {elem.email.map((email, idx) => (
                <a key={idx} href={email.url}>
                  <h6>{email.text}</h6>
                </a>
              ))}
            </div>
          </div>

        </div>
      ))}
    </>
  );
};

export default Footer;