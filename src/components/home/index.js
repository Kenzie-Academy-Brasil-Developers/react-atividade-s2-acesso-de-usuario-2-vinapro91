import { Link } from "react-router-dom";
import Input from "../input";
const Home = ({ newMember, setNewMember }) => {
  return (
    <>
      {newMember.map((element, index) =>
        element.type === "pj" ? (
          <Link key={index} to={`/company/${element.id}`}>
            {element.name}
          </Link>
        ) : (
          <Link key={index} to={`/customer/${element.id}`}>
            {element.name}
          </Link>
        )
      )}
      <Input newMember={newMember} setNewMember={setNewMember} />
    </>
  );
};
export default Home;
