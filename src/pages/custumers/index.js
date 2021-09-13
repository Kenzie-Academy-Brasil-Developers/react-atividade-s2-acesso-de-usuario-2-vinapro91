import { useParams } from "react-router";
import { Link } from "react-router-dom";
const Custumers = ({ members }) => {
  const { id } = useParams();
  const member = members.find((element) => element.id === id);

  return (
    <div>
      <h1>Detalhes do cliente</h1>

      <p>Nome: {member.name}</p>

      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Custumers;
