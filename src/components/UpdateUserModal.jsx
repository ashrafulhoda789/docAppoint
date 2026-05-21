"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import { FaEdit, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

export function UpdateUserModal({ user }) {

    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        console.log(name, image);

        await authClient.updateUser({
            name,
            image
        })

        toast.success('Profile updated successfully!')
        setIsOpen(false);
    }
    return (
        <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
            <Button className="w-full rounded-2xl bg-linear-to-r from-teal-700 to-cyan-500 px-5 py-2 font-semibold text-white shadow-md transition"> <FaEdit></FaEdit> Update Profile </Button>

            <Modal.Backdrop className="backdrop-blur-sm bg-black/40">
                <Modal.Container placement="center" className="z-50">
                    <Modal.Dialog className="sm:max-w-lg rounded-3xl border border-teal-100 bg-white shadow-2xl">
                        <Modal.CloseTrigger className="text-teal-500" />
                        <Modal.Header className="border-b border-teal-100 bg-linear-to-r from-teal-50 to-cyan-50 p-5">
                            <Modal.Icon className="bg-teal-100 text-teal-600 rounded-xl">
                                <FaUser></FaUser>
                            </Modal.Icon>
                            <Modal.Heading className="text-slate-900 font-bold">Update Profile</Modal.Heading>

                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" defaultValue={user?.name} name="name" type="text">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" defaultValue={user?.image} name="image" type="url">
                                        <Label>Image</Label>
                                        <Input placeholder="Enter your image url" />
                                    </TextField>

                                    <Modal.Footer>
                                        <Button slot="close" variant="outline" className="text-teal-700 ">
                                            Cancel
                                        </Button>
                                        <Button type="submit" className="bg-teal-600 text-white hover:bg-teal-700">Save</Button>
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