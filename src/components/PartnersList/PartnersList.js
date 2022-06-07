import "./PartnersList.css";
import Partner from "../Partner/Partner";
import mxmLogo from "../../images/mxm_logo.svg";
import uppLogo from "../../images/upp_logo.svg";
import sixtyFiveLogo from "../../images/65_logo.svg";
import fttLogo from "../../images/ftt_logo.svg";
import fiftySevenLogo from "../../images/57_logo.svg";
import odeLogo from "../../images/ode_logo.svg";
import mwcLogo from "../../images/mwc_logo.svg";

export default function PartnersList() {
  return (
    <section className="partners">
      <ul className="partners__list">
        <li>
          <Partner partnerLogo={mxmLogo} />
        </li>
        <li>
          <Partner partnerLogo={uppLogo} />
        </li>
        <li>
          <Partner partnerLogo={sixtyFiveLogo} />
        </li>
        <li>
          <Partner partnerLogo={fttLogo} />
        </li>
        <li>
          <Partner partnerLogo={fiftySevenLogo} />
        </li>
        <li>
          <Partner partnerLogo={odeLogo} />
        </li>
        <li>
          <Partner partnerLogo={mwcLogo} />
        </li>
      </ul>
    </section>
  );
}
