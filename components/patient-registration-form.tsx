"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, ChevronRight, Pencil } from "lucide-react"

export default function PatientRegistrationForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [patientNameKnown, setPatientNameKnown] = useState<string | null>(null)
  const [birthDateKnown, setBirthDateKnown] = useState<string | null>(null)

  return (
    <div className="flex">
      {/* Left sidebar */}
      <div className="w-64 pr-6">
        <h2 className="text-xl font-medium mb-4">Create new patient</h2>

        <div className="text-sm text-gray-500 mb-4">Jump to</div>

        <nav className="space-y-3">
          <div className="flex items-center text-openmrs-green">
            <ChevronRight className="h-4 w-4 mr-1" />
            <span>Basic Info</span>
          </div>
          <div className="flex items-center text-gray-600">
            <ChevronRight className="h-4 w-4 mr-1" />
            <span>Contact Details</span>
          </div>
          <div className="flex items-center text-gray-600">
            <ChevronRight className="h-4 w-4 mr-1" />
            <span>Relationships</span>
          </div>
        </nav>

        <div className="mt-8 space-y-3">
          <Button className="w-full bg-openmrs-green hover:bg-openmrs-green-dark">Register patient</Button>
          <Button variant="outline" className="w-full border-gray-300 text-gray-700">
            Cancel
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-openmrs-green">1. Basic Info</h3>
          <p className="text-sm text-gray-500">All fields are required unless marked optional</p>
        </div>

        <div className="bg-white p-6 rounded shadow-sm">
          <div className="mb-8">
            <h4 className="text-base font-medium mb-4">Full Name</h4>

            <div className="mb-4">
              <p className="text-sm mb-2">Patient's Name is Known?</p>
              <div className="flex space-x-2">
                <Button
                  variant={patientNameKnown === "yes" ? "default" : "outline"}
                  size="sm"
                  className={patientNameKnown === "yes" ? "bg-blue-500 hover:bg-blue-600" : "border-gray-300"}
                  onClick={() => setPatientNameKnown("yes")}
                >
                  Yes
                </Button>
                <Button
                  variant={patientNameKnown === "no" ? "default" : "outline"}
                  size="sm"
                  className={patientNameKnown === "no" ? "bg-blue-500 hover:bg-blue-600" : "border-gray-300"}
                  onClick={() => setPatientNameKnown("no")}
                >
                  No
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 space-y-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-normal text-gray-600">
                    First Name
                  </Label>
                  <Input id="firstName" className="mt-1 border-gray-300" />
                </div>

                <div>
                  <Label htmlFor="middleName" className="text-sm font-normal text-gray-600">
                    Middle Name (optional)
                  </Label>
                  <Input id="middleName" className="mt-1 border-gray-300" />
                </div>

                <div>
                  <Label htmlFor="familyName" className="text-sm font-normal text-gray-600">
                    Family Name
                  </Label>
                  <Input id="familyName" className="mt-1 border-gray-300" />
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-28 h-28 border border-gray-300 flex items-center justify-center text-center text-xs text-gray-500 mb-2">
                  No image
                  <br />
                  to display
                </div>
                <Button variant="secondary" size="sm" className="bg-gray-700 text-white hover:bg-gray-800 text-xs px-3">
                  <Pencil className="h-3 w-3 mr-1" /> Edit
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-medium mb-4">Sex</h4>
            <p className="text-sm text-gray-600 mb-2">Sex</p>
            <RadioGroup className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem value="male" id="male" className="border-gray-400" />
                <Label htmlFor="male" className="ml-2 font-normal">
                  Male
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="female" id="female" className="border-gray-400" />
                <Label htmlFor="female" className="ml-2 font-normal">
                  Female
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="other" id="other" className="border-gray-400" />
                <Label htmlFor="other" className="ml-2 font-normal">
                  Other
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="unknown" id="unknown" className="border-gray-400" />
                <Label htmlFor="unknown" className="ml-2 font-normal">
                  Unknown
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-medium mb-4">Birth</h4>

            <div className="mb-4">
              <p className="text-sm mb-2">Date of Birth Known?</p>
              <div className="flex space-x-2">
                <Button
                  variant={birthDateKnown === "yes" ? "default" : "outline"}
                  size="sm"
                  className={birthDateKnown === "yes" ? "bg-blue-500 hover:bg-blue-600" : "border-gray-300"}
                  onClick={() => setBirthDateKnown("yes")}
                >
                  Yes
                </Button>
                <Button
                  variant={birthDateKnown === "no" ? "default" : "outline"}
                  size="sm"
                  className={birthDateKnown === "no" ? "bg-blue-500 hover:bg-blue-600" : "border-gray-300"}
                  onClick={() => setBirthDateKnown("no")}
                >
                  No
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="dob" className="text-sm font-normal text-gray-600">
                Date of Birth
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal mt-1 border-gray-300 text-gray-500"
                  >
                    {date ? format(date, "dd/MM/yyyy") : "dd/mm/yyyy"}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h4 className="text-base font-medium">Identifiers</h4>
            <Button variant="link" className="text-blue-500 flex items-center">
              Configure <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

