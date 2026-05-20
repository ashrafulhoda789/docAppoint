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
            <Button variant="outline" className={'w-full bg-blue-500 text-white transition font-bold'}> <FaEdit></FaEdit> Update Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-blue-500 text-white">
                                <FaUser></FaUser>
                            </Modal.Icon>
                            <Modal.Heading>Update Profile</Modal.Heading>

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
                                        <Button slot="close" variant="outline" className={'text-blue-500'}>
                                            Cancel
                                        </Button>
                                        <Button type="submit" className=" bg-blue-400 text-white font-semibold">Save</Button>
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