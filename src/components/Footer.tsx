import "../styles/components/Footer.css";
import { paymentMethods, socialNetworks, companyData } from "../mock";

export const Footer = () => {
  const year: number = new Date().getFullYear();

  return (
    <footer>
      <section className="payment-method-section">
        {paymentMethods.map((method, index) => (
          <img key={index} src={method.image} alt={method.name} />
        ))}
        <p>and 50+ more</p>
      </section>
      <section className="information-section">
        <article className="information-section-socials">
          {socialNetworks.map((social, index) => (
            <a key={index} href={social.url}>
              <img src={social.image} alt={social.name} />
            </a>
          ))}
        </article>
        <article className="information-section-company ">
          <div className="colum-information logo">
            <img
              src="https://chicksgold.com/logo/chicks-logo-large.svg"
              alt="Logo"
            />
            <a href="mailto:support@chicksgold.com">support@chicksgold.com</a>
          </div>
          {companyData.map((companyData, index) => (
            <div key={index} className="colum-information-desktop">
              <h3>{companyData.title}</h3>
              <ul>
                {companyData.childrens.map((info, index) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="colum-information-mobile">
            {companyData.map((companyData, index) => (
              <details key={index} className="colum-information-details">
                <summary>{companyData.title}</summary>
                <ul>
                  {companyData.childrens.map((info, index) => (
                    <li key={index}>{info}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          <div className="colum-information rating">
            <div>
              {new Array(5).fill(undefined).map((_, index) => (
                <img
                  key={index}
                  src="https://chicksgold.com/home/star_full.svg"
                  alt="start"
                />
              ))}
            </div>
            <p>Trustpilot Reviews</p>
          </div>
        </article>
        <article className="information-section-copyright">
          <small>© 2017 - {year} Chicksgold.com. All Rights Reserved</small>
        </article>
      </section>
    </footer>
  );
};
