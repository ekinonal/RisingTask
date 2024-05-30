import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Graph from "@/components/Graph";
import Table from "@/components/Table";
import Sidebar from "@/components/Sidebar";
import CardContainer from "@/components/CardContainer";

const Dashboard = () => {
  return (
    <div className="flex container min-h-screen">
      <div className="flex min-h-screen lg:w-auto w-1/5">
        <Sidebar />
      </div>
      <div className="flex flex-col lg:w-full w-4/5 space-y-12">
        <Header />
        <Nav />
        <CardContainer />
        <Graph />
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
