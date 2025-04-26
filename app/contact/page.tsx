import ContactForm from "@/components/contactForm/contactForm";
import { PageTitle } from "@/components/pageTitle/pageTitle";

export default function ContactPage() {


    return (
        <div className="flex flex-col w-full justify-center relative h-100">
            <PageTitle title="Me contacter" subtitle="N'hésitez pas à m'envoyer un message !" invert={true} />
            <ContactForm />
        </div>
    )
}