export default function Select({
  label,
  options,
  onChange,
  placeholder,
  errorMsg,
  value,
  id,
}) {
  const errorMessage = {
    designation: "Designation is required",
    company_name: "Company name is required",
    recruitment_status: "Recruitment status is required",
    applied_date: "Applied Date is required",
    job_type: "Job type is required",
  }[id];
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
        for="grid-first-name"
      >
        {label}
      </label>
      <div className="relative">
        <select
          className={`block appearance-none w-full bg-gray-200 border text-gray-700 py-2 px-4 mb-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 border-gray-200 
          ${errorMsg && " border-red-500"}`}
          id={id}
          onChange={(e) =>
            onChange(
              e?.target?.value === placeholder ? "" : e?.target?.value,
              id
            )
          }
        >
          <option>{placeholder}</option>
          {options.map((opt, index) => (
            <option selected={value === opt} key={index}>{opt}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <div className="text-red-500 text-xs italic">{errorMsg && errorMessage}</div>
    </>
  );
}
