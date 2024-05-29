export default function CardDetails({ cardData, handleBack }) {
  const data = [
    {
      key: "Company Name",
      value: cardData?.company_name,
    },
    {
      key: "Company location",
      value: cardData?.company_location,
    },

    {
      key: "Company strength",
      value: cardData?.company_strength,
    },

    {
      key: "Designation",
      value: cardData?.designation,
    },

    {
      key: "Technology",
      value: cardData?.technology,
    },
    {
      key: "Total Experience",
      value: cardData?.total_experience,
    },

    {
      key: "Contacted by",
      value: cardData?.contact_person,
    },

    {
      key: "Contacted Number",
      value: cardData?.contact_number,
    },

    {
      key: "Job type",
      value: cardData?.job_type,
    },
    {
      key: "Applied Date",
      value: cardData?.applied_date,
    },

    {
      key: "Applied through",
      value: cardData?.applied_through,
    },

    {
      key: "Expected CTC",
      value: cardData?.expected_ctc,
    },

    {
      key: "Interview start date",
      value: cardData?.interview_start_date,
    },

    {
      key: "Next Interview date",
      value: cardData?.next_interview_date,
    },

    {
      key: "Recruitment Status",
      value: cardData?.recruitment_status,
    },

    {
      key: "Offer CTC",
      value: cardData?.offer_ctc,
    },
    {
      key: "Joining Date",
      value: cardData?.joining_date,
    },

    {
      key: "Offer accepted ?",
      value: cardData?.offer_accepted,
    },
  ];
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="px-4 sm:px-0">
            <p className="text-base font-semibold leading-7 text-gray-900">
              Applicant Information
            </p>
          </div>
          <button
            className="bg-cyan-500 py-2 px-4 h-8 font-bold flex items-center"
            onClick={() => handleBack()}
          >
            Back
          </button>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <div className="divide-y divide-gray-100">
            {data.map((d,i) => (
              <div className="p-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0" key={i}>
                <div className="text-sm font-medium leading-6 text-gray-700">
                  {d.key}
                </div>
                <div className="mt-1 text-sm leading-6 text-gray-900 sm:col-span-2 sm:mt-0 capitalize">
                  {d.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
