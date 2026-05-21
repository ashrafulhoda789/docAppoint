"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export function DeleteBooking({ booking }) {
    const { _id, doctorName } = booking;

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/myAppointment/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json();
        if (data.deletedCount > 0) {
            toast.success('Deleted Successfully!')
            redirect('/dashboard')
        }
        // console.log(data);
    }
    return (
        <AlertDialog>

            <Button
                size="sm"
                className="w-full sm:w-auto bg-rose-50 text-rose-600 hover:bg-rose-100"
            >
                Delete
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete appointment permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{doctorName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}