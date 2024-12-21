import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-xl border shadow-sm bg-white p-4 flex-1 ">
      <div className="flex justify-between items-center">
        <h2 className="capitalize font-medium text-gray-500">{type}'s</h2>
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
    </div>
  );
};

export default UserCard;
