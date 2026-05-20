"use client";

import { Envelope } from "@gravity-ui/icons";
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";
import { useRef } from "react";

export function AppointmentModal({ doctor }) {

    const closeRef = useRef(null);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const appointments = Object.fromEntries(formData.entries());

        const appointment = {
            userEmail: "", 
            doctorName: doctor?.name,

            patientName: appointments.patientName,
            gender: appointments.gender,
            phone: appointments.phone,

            appointmentDate: appointments.date,
            appointmentTime: appointments.time,
        };

        const res = await fetch(`http://localhost:5000/myAppointment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })

        const data = await res.json();

        console.log(data);

        closeRef.current?.click();
    }
    return (
        <Modal>

            <Button variant="secondary">Book Appointment</Button>

            <Modal.Backdrop>
                <Modal.Container placement="center">
                    <Modal.Dialog className="sm:max-w-lg">

                        <Modal.CloseTrigger ref={closeRef} />

                        <Modal.Header>
                            <Modal.Icon className="bg-blue-100 text-blue-600">
                                <Envelope className="size-5" />
                            </Modal.Icon>

                            <Modal.Heading>
                                Book Appointment
                            </Modal.Heading>

                            <p className="mt-1.5 text-sm text-muted">
                                Fill in your details to book an appointment with{" "}
                                <span className="font-semibold text-blue-600">
                                    {doctor?.name}
                                </span>
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">

                                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                                    {/* Patient Name */}
                                    <TextField name="patientName" variant="secondary">
                                        <Label>Patient Name</Label>
                                        <Input name="patientName" placeholder="Enter patient name" />
                                    </TextField>

                                    {/* Gender FIXED */}
                                    <div>
                                        <Label>Gender</Label>
                                        <select
                                            name="gender"
                                            className="w-full p-2 border rounded-md"
                                        >
                                            <option value="">Select gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    {/* Phone */}
                                    <TextField name="phone" variant="secondary">
                                        <Label>Phone Number</Label>
                                        <Input name="phone" placeholder="01XXXXXXXXX" type="tel" />
                                    </TextField>

                                    {/* Date FIXED */}
                                    <TextField name="date" variant="secondary">
                                        <Label>Appointment Date</Label>
                                        <Input name="date" type="date" />
                                    </TextField>

                                    {/* TIME FIXED (MAIN BUG) */}
                                    <div>
                                        <Label>Available Time Slots</Label>
                                        <select
                                            name="time"
                                            className="w-full p-2 border rounded-md"
                                        >
                                            <option value="">Select time</option>
                                            {doctor?.availability?.map((time, i) => (
                                                <option key={i} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Note */}
                                    <TextField name="note" variant="secondary">
                                        <Label>Reason / Note</Label>
                                        <Input name="note" placeholder="Short description (optional)" />
                                    </TextField>

                                    {/* Footer */}
                                    <Modal.Footer className="flex gap-3">

                                        <Button slot="close" variant="secondary" className="w-1/2">
                                            Cancel
                                        </Button>

                                        <Button
                                            type="submit"
                                            className="w-1/2 bg-blue-600 text-white hover:bg-blue-700"
                                        >
                                            Confirm Booking
                                        </Button>

                                    </Modal.Footer>

                                </form>

                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}