import "./style/organimsStyle.css";
import Button from "../atoms/Button";

function SectionModule({ children , title }) {
  return (
  <section className="section">
    <h2 className="section-title">{title}</h2>
    {children}
    </section>);
}

export default SectionModule;
