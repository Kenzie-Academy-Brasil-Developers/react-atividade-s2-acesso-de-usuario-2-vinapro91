import { Link } from "react-router-dom";
import Input from "../input";
const Home = ({ members, newMember, setNewMember }) => {
  return (
    <>
      {members.map((element, index) =>
        element.type === "pj" ? (
          <Link key={index} to to={`/company/${element.id}`}>
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
