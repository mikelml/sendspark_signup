import { useParams } from "react-router-dom";
const Dashboard = () => {
  const { user } = useParams();

  return <div>Welcome {user}</div>;
};

export default Dashboard;
