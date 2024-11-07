import React from "react";
import { Button, Modal } from "antd";

interface Props {
    title: string;
    description: string;
    onSubmit: () => Promise<void>;
    onCancel: () => void
    isOpen: boolean
}
export const DeleteDialog: React.FC<Props> = ({ title, description, onSubmit, isOpen, onCancel }) => {

    return (
        <Modal
            animation={true}
            open={isOpen}
            title={title}
            centered={true}
            footer={[
                <Button key="back" onClick={onCancel}>
                    Скасувати
                </Button>,
                <Button key="submit" color="danger" variant="solid" onClick={onSubmit}>
                    Delete
                </Button>
            ]}
            onCancel={onCancel}>
            <p>{description}</p>
        </Modal>
    );
};