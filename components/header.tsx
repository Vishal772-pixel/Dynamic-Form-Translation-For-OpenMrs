import { Search, Bell, User, HelpCircle } from "lucide-react"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-openmrs-green text-white flex items-center h-14 px-4">
      <div className="flex items-center">
        <div className="mr-2">
          <Image
            src="/placeholder.svg?height=24&width=24"
            alt="OpenMRS Logo"
            width={24}
            height={24}
            className="invert"
          />
        </div>
        <span className="font-semibold mr-6">OpenMRS</span>
        <div className="flex items-center text-sm">
          <span className="opacity-90">Outpatient Clinic</span>
        </div>
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <div id="google_translate_element" className="mr-2"></div>
        <Search className="h-5 w-5" />
        <Bell className="h-5 w-5" />
        <User className="h-5 w-5" />
        <HelpCircle className="h-5 w-5" />
      </div>
    </header>
  )
}

