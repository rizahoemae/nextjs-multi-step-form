export default function StepOne() {
  return (
    <>
      <div className="mb-3">
        <h1 className="text-primary-marine-blue">Personal Info</h1>
        <p className="text-neutral-light-year">
          Please provide your name, email address, and phone number
        </p>
      </div>

      <div className="space-y-6 flex flex-col">
        <div>
          <label>Name</label>
          <input type="text" placeholder="e.g. Stephen King" />
        </div>
        <div>
          <label>Email Address</label>
          <input type="text" placeholder="e.g. stephenking@lorem.com" />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" placeholder="e.g. +1 234 567 890" />
        </div>
      </div>
    </>
  );
}
