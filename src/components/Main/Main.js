import "./Main.css";
import PartnersList from "../PartnersList/PartnersList";

export default function Main() {
  return (
    <main className="main">
      <h1 className="main__title">Наши партнёры</h1>
      <PartnersList />
    </main>
  );
}
