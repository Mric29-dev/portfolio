"use client";

import { Button, Form, Input, Spinner, Textarea } from "@heroui/react";
import { FormEvent, useState } from "react";
import { sendEmail } from "./send-email";

export default function ContactForm() {

    const [submitted, setSubmitted] = useState<any>(null);
    const [submittedMessage, setSubmittedMessage] = useState<any>(null);
    const [errors, setErrors] = useState<any>({});

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        // Custom validation checks
        const newErrors = {};

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        sendEmail(data)
            .then(() => {
                // Clear errors and submit
                setErrors({});
                setSubmitted(null);

                setSubmittedMessage(true);
                setTimeout(() => {
                    setSubmittedMessage(null);
                }, 4000)
            })
            .catch(e => setErrors(e));

        setSubmitted(data);
    };

    return (
        <div className="mt-8">
            {!submitted && <Form
                className="flex w-full justify-center items-center space-y-4"
                validationErrors={errors}
                onReset={() => setSubmitted(null)}
                onSubmit={onSubmit}
            >

                {submittedMessage && (
                    <div className="text-lg text-success text-default-500 mt-4">
                        Votre message a bien été envoyé, merci !
                    </div>
                )}

                <div className="flex flex-col gap-4 w-[24rem]">

                    <Input
                        isRequired
                        errorMessage={({ validationDetails }) => {
                            if (validationDetails.valueMissing) {
                                return "Entrez votre nom";
                            }
                            return errors.name;
                        }}
                        label="Nom"
                        labelPlacement="outside"
                        name="lastname"
                        placeholder="Entrez votre nom"
                    />

                    <Input
                        isRequired
                        errorMessage={({ validationDetails }) => {
                            if (validationDetails.valueMissing) {
                                return "Entrez votre prénom";
                            }

                            return errors.name;
                        }}
                        label="Prénom"
                        labelPlacement="outside"
                        name="firstname"
                        placeholder="Entrez votre prénom"
                    />

                    <Input
                        isRequired
                        errorMessage={({ validationDetails }) => {
                            if (validationDetails.valueMissing) {
                                return "Rentrez votre email";
                            }
                            if (validationDetails.typeMismatch) {
                                return "Rentrez une adresse email valide";
                            }
                        }}
                        label="Email"
                        labelPlacement="outside"
                        name="email"
                        placeholder="Rentrez votre email"
                        type="email"
                    />

                    <Textarea
                        isRequired
                        errorMessage={({ validationDetails }) => {
                            if (validationDetails.valueMissing) {
                                return "Renseignez un message";
                            }
                        }}
                        label="Message"
                        labelPlacement="outside"
                        name="message"
                        placeholder="Votre message"
                        type="textarea"
                        minRows={5}
                    />

                    <div className="flex gap-4">
                        <Button className="w-full" color="primary" type="submit">
                            Envoyer
                        </Button>
                        <Button type="reset" variant="bordered">
                            Vider
                        </Button>
                    </div>
                </div>

            </Form>
            }


            {submitted &&
                <div className="flex w-full justify-center items-center">
                    <Spinner color="primary" label="Envoi de votre message..." className="pt-16" />
                </div>
            }
        </div>
    )
}