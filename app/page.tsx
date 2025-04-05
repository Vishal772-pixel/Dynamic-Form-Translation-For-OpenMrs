import PatientRegistrationForm from "@/components/patient-registration-form"

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="breadcrumb bg-white py-3 px-4 text-sm">
        <span className="text-blue-500">Patient Registration</span> /
      </div>
      <div className="px-4 py-6">
        <PatientRegistrationForm />
      </div>
    </div>
  )
}

