"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const UpdateBookingModal = ({ booking }) => {
    // console.log(booking.appointmentTime);
    // console.log(booking._id);
    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const appointment = Object.fromEntries(formData.entries());

        if (!appointment.appointmentDate || !appointment.patientName || !appointment.gender || !appointment.phone) {
            toast.error("Please fill all fields");
            return;
        }

        const res = await fetch(`http://localhost:5000/myAppointment/${booking._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })

        const data = await res.json();
        // console.log('updated ', data);

        if (data.modifiedCount > 0) {
            toast.success("Appointment updated successfully!");
            redirect('/dashboard');
        }

        setIsOpen(false);
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={setIsOpen}>

            <Button
                onPress={() => setIsOpen(true)}
                className="rounded-2xl bg-linear-to-r from-teal-700 to-cyan-500 px-5 py-2 font-semibold text-white shadow-md transition"
            >
                Update
            </Button>

            <Modal.Backdrop className="backdrop-blur-sm bg-black/40">
                <Modal.Container placement="center" className="z-50">
                    <Modal.Dialog className="sm:max-w-lg rounded-3xl border border-teal-100 bg-white shadow-2xl">

                        <Modal.CloseTrigger className="text-teal-500" />

                        <Modal.Header className="border-b border-teal-100 bg-linear-to-r from-teal-50 to-cyan-50 p-5">

                            <Modal.Icon className="bg-teal-100 text-teal-600 rounded-xl">
                                <FaEdit />
                            </Modal.Icon>

                            <Modal.Heading className="text-slate-900 font-bold">
                                Update Appointment
                            </Modal.Heading>

                        </Modal.Header>

                        <Modal.Body className="p-6">

                            <Surface variant="default">

                                <form onSubmit={onSubmit} className="flex flex-col gap-4">

                                    <TextField name="patientName" defaultValue={booking.patientName}>
                                        <Label>Patient Name</Label>
                                        <Input />
                                    </TextField>
                                    <TextField name="gender" defaultValue={booking.gender}>
                                        <Label>Gender</Label>
                                        <Input />
                                    </TextField>
                                    <TextField name="phone" defaultValue={booking.phone} >
                                        <Label>Phone</Label>
                                        <Input />
                                    </TextField>
                                    <TextField name="appointmentDate" defaultValue={booking.appointmentDate} type="date">
                                        <Label>Appointment Date</Label>
                                        <Input />
                                    </TextField>



                                    <div className="flex justify-end gap-2 pt-4">

                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="text-teal-700"
                                            onPress={() => setIsOpen(false)}
                                        >
                                            Cancel
                                        </Button>

                                        <Button
                                            type="submit"
                                            className="bg-teal-600 text-white hover:bg-teal-700"
                                        >
                                            Save
                                        </Button>

                                    </div>

                                </form>

                            </Surface>

                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>

        </Modal>
    );
};

export default UpdateBookingModal;