export default function Card({ data, onClick }) {
  const color =
    {
      Remote: "bg-green-800",
      Onsite: "bg-blue-800",
      Hybrid: "bg-yellow-800",
    }[data.job_type] || "bg-red-800";

  return (
    <>
      <div className="bg-white border-2 border-gray-200 shadow-sm rounded-lg text-gray-700 font-normal p-4 w-full text-sm">
        <div className="flex justify-between pb-1 gap-4">
          <div>
            <div className="font-bold text-lg">{data.designation}</div>
            <div className="font-semibold text-md">{data.company_name}</div>
            <div className="font-medium">{data.recruitment_status}</div>
            <div className="font-medium">Date-{new Date(data.applied_date).toLocaleDateString('en-GB')}</div>
          </div>
          <div
            className={`${color} h-fit px-2 rounded-full text-white font-bold text-xs py-1`}
          >
            {data.job_type[0]}
          </div>
        </div>
        <div
          className="text-blue-400 border-b-2 border-blue-400 border-dotted w-fit cursor-pointer"
          onClick={() => onClick(data?.company_name)}
        >
          Read More
        </div>
      </div>
    </>
  );
}
