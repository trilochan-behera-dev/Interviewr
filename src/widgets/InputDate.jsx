export default function InputDate({
  label,
  onChange,
  placeholder,
  errorMsg,
  id,
  value
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
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white border ${
          errorMsg && " border-red-500"
        }`}
        type="date"
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e?.target?.value, id)}
      />
      <div className="text-red-500 text-xs italic">{errorMsg && errorMessage}</div>
    </>
  );
}
