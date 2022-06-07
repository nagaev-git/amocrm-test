import "./Partner.css";

export default function Partner({ partnerLogo }) {
  return (
    <div className="partner">
      <img src={partnerLogo} alt="Логотип" className="partner__logo" />
    </div>
  );
}
