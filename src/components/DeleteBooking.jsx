"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export function DeleteBooking({ booking }) {
    const { _id, doctorName } = booking;

    const handleDelete = async () => {

        const {data: tokenData} = await authClient.token();

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/myAppointment/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${tokenData.token}`
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
                className="rounded-2xl bg-red-100 px-5 py-3 font-semibold text-red-500 shadow-md transition"
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