import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row">
      {/* Left Part */}
      <div className="w-full lg:w-2/3">
        {/* User Cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>

      {/* Right Part */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
