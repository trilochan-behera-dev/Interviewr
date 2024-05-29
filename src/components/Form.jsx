import InputText from "@/widgets/InputText";
import InputDate from "@/widgets/InputDate";
import Select from "@/widgets/Select";

export default function Form({ formData, handleSave, saveData, errorMsg }) {
  return (
    <div className="w-full">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputText
            label="Company Name"
            id="company_name"
            placeholder=""
            errorMsg={errorMsg?.company_name}
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.company_name}
          />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <InputText
            label="Company location"
            id="company_location"
            placeholder=""
            errorMsg=""
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.company_location}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <Select
            label="Company strength"
            options={[
              "1-10",
              "10-50",
              "50-200",
              "200-500",
              "500-1000",
              "1000-2000",
              "2000-5000",
            ]}
            id="company_strength"
            placeholder="Select Strength"
            errorMsg=""
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.company_location}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputText
            label="Designation"
            id="designation"
            placeholder=""
            errorMsg={errorMsg?.designation}
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.designation}
          />
        </div>
        <div className="w-full md:w-1/3 px-3">
          <InputText
            label="Technology"
            id="technology"
            placeholder=""
            errorMsg=""
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.technology}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <Select
            label="Total Experience"
            options={Array.from({ length: 10 }, (_, i) => i + 1)}
            id="total_experience"
            placeholder="Select Experience"
            errorMsg=""
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.total_experience}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputText
            label="Contacted by"
            id="contact_person"
            placeholder=""
            errorMsg=""
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.contact_person}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputText
            label="Contacted Number"
            id="contact_number"
            placeholder=""
            errorMsg=""
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.contact_number}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <Select
            label="Job type"
            id="job_type"
            options={["Remote", "Onsite", "Hybrid"]}
            placeholder="Select Job type"
            errorMsg={errorMsg?.job_type}
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.job_type}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputDate
            label="Applied Date"
            id="applied_date"
            placeholder=""
            errorMsg={errorMsg?.applied_date}
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.applied_date}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputText
            label="Applied through"
            id="applied_through"
            placeholder=""
            errorMsg=""
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.applied_through}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputText
            label="Expected CTC"
            id="expected_ctc"
            placeholder=""
            errorMsg=""
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.expected_ctc}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputDate
            label="Interview start date"
            id="interview_start_date"
            placeholder=""
            errorMsg=""
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.interview_start_date}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputDate
            label="Next Interview date"
            id="next_interview_date"
            placeholder=""
            errorMsg=""
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.next_interview_date}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <Select
            label="Recruitment Status"
            id="recruitment_status"
            options={[
              "Applied",
              "Technical rounds",
              "Manegerial rounds",
              "Hr round",
              "Offer letter",
              "Joining letter",
              "Reject",
            ]}
            placeholder="Select status"
            errorMsg={errorMsg?.recruitment_status}
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.recruitment_status}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputText
            label="Offer CTC"
            id="offer_ctc"
            placeholder=""
            errorMsg=""
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.offer_ctc}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <InputDate
            label="Joining Date"
            id="joining_date"
            placeholder=""
            errorMsg=""
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.joining_date}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <Select
            label="Offer accepted ?"
            id="offer_accepted"
            options={["Yes", "No"]}
            placeholder="Accepted ?"
            errorMsg=""
            onChange={(value, id) => handleSave(value, id)}
            value={formData?.offer_accepted}
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Notes
          </label>
          <div className="relative">
            <textarea
              id="note"
              className="resize rounded-md bg-gray-200 w-full h-20 p-2 text-gray-700 focus:outline-none"
              value={formData?.note}
              onChange={(e) => handleSave(e?.target?.value, "note")}
            ></textarea>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="bg-green-700 w-full h-12 font-bold"
        onClick={() => saveData()}
      >
        Submit
      </button>
    </div>
  );
}
