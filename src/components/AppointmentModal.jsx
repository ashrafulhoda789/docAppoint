"use client";

import { authClient } from "@/lib/auth-client";
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
import { toast } from "react-toastify";

export function AppointmentModal({ doctor }) {

    const closeRef = useRef(null);


    const userData = authClient.useSession();
    const user = userData?.data?.user;

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const appointments = Object.fromEntries(formData.entries());


        const appointment = {
            userEmail: user?.email,
            userId: user?.id,
            doctorName: doctor?.name,
            doctorImage: doctor?.image,
            specialty: doctor?.specialty,

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
        if(data.insertedId){
            toast.success('Appointment Booked Successfully!');
        }

        closeRef.current?.click();
    }
    return (
        <Modal>

            <Button className="rounded-2xl bg-linear-to-r from-teal-700 to-cyan-500 px-5 py-2 font-semibold text-white shadow-md transition">Book Appointment</Button>

            <Modal.Backdrop className="backdrop-blur-sm bg-black/40 z-40" >
                <Modal.Container placement="center" className="z-50">
                    <Modal.Dialog className="sm:max-w-lg rounded-3xl border border-teal-100 bg-white shadow-2xl">

                        <Modal.CloseTrigger ref={closeRef} className="text-teal-500"/>

                        <Modal.Header className="border-b border-teal-100 bg-linear-to-r from-teal-50 to-cyan-50 p-5">
                            <Modal.Icon className="bg-teal-100 text-teal-600 rounded-xl">
                                <Envelope className="size-5" />
                            </Modal.Icon>

                            <Modal.Heading className="text-slate-900 font-bold">
                                Book Appointment
                            </Modal.Heading>

                            <p className="mt-1.5 text-sm text-slate-500">
                                Fill in your details to book an appointment with{" "}
                                <span className="font-semibold text-teal-600">
                                    {doctor?.name}
                                </span>
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">

                                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                                    <TextField name="patientName" variant="secondary">
                                        <Label>Patient Name</Label>
                                        <Input name="patientName" placeholder="Enter patient name" />
                                    </TextField>

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

                                    <TextField name="phone" variant="secondary">
                                        <Label>Phone Number</Label>
                                        <Input name="phone" placeholder="01XXXXXXXXX" type="tel" />
                                    </TextField>

                                    <TextField name="date" variant="secondary">
                                        <Label>Appointment Date</Label>
                                        <Input name="date" type="date" />
                                    </TextField>

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

                                    <TextField name="note" variant="secondary">
                                        <Label>Reason / Note</Label>
                                        <Input name="note" placeholder="Short description (optional)" />
                                    </TextField>

                                    <Modal.Footer className="flex gap-3">

                                        <Button slot="close" variant="secondary" className="text-teal-700 w-1/2">
                                            Cancel
                                        </Button>

                                        <Button
                                            type="submit"
                                            className="w-1/2 bg-teal-600 text-white hover:bg-teal-700"
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