"use client";

import {SubmitHandler, set, useForm} from "react-hook-form";
import {bounceAnimation, staggeredAnimation} from "~/utils/animations";
import {motion, useInView} from "framer-motion";
import {useRef, useState} from "react";

import Button from "./button";
import Container from "~/components/container";
import {DownloadIcon} from "@radix-ui/react-icons";
import {cn} from "~/utils/cn";
import {useSize} from "~/contexts/sizeContext";
import z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  phone: z.string().min(10, "Phone number must be at least 10 characters long"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, "Message must be at least 10 characters long"),
});

type ContactFormSchema = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });
  const onSubmit: SubmitHandler<ContactFormSchema> = (data) => {
    console.log(data);
    const apiEndpoint = "/api/email";
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
      });

    setIsSubmitted(true);
  };

  const {setSize} = useSize();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const InputClass =
    "relative z-10 my-1 rounded-xl border border-white px-4 py-4 text-lg bg-transparent text-white lg:px-8 lg:text-2xl w-full focus:outline-none ";

  const InputDivClass = "my-4 lg:my-0 flex flex-col items-start w-full z-10";
  const LabelClass = "block text-lg text-white";
  return (
    <form ref={ref} onSubmit={handleSubmit(onSubmit)}>
      <Container>
        {isSubmitted ? (
          <div className="my-32 flex flex-col gap-12 items-center">
            <motion.h1
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              variants={staggeredAnimation}
              className="text-white text-2xl lg:text-7xl text-center items-center"
            >
              <span className="underline">Thanks for your message!</span> <br />{" "}
              <span className="text-xl lg:text-4xl">
                {" "}
                I&apos;ll get back to you as soon as possible :)
              </span>
            </motion.h1>
            <div className="flex flex-row gap-6">
              <Button
                href="/CV.pdf"
                className="flex flex-row gap-2 items-center"
              >
                Download CV <DownloadIcon className="h-6 w-6" />
              </Button>
              <Button href="/">Back to Home</Button>
            </div>
          </div>
        ) : (
          <motion.main
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={staggeredAnimation}
            className={cn(
              "mx-auto my-8 max-w-lg lg:max-w-5xl text-center py-8 lg:py-16 lg:grid grid-cols-2 gap-6"
            )}
          >
            <motion.p
              onMouseEnter={() => setSize(60)}
              onMouseLeave={() => setSize(40)}
              className="col-span-2 my-8 text-white text-2xl text-left"
            >
              Feel free to either send me an email at{" "}
              <span className="underline">macsweenydev@gmail.com</span> or fill
              in the form below and I&apos;ll get back to you as soon as
              possible.
            </motion.p>
            <motion.div
              onMouseEnter={() => setSize(80)}
              onMouseLeave={() => setSize(40)}
              variants={bounceAnimation}
              className={InputDivClass}
            >
              <label className={LabelClass}>Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Smith"
                className={cn(InputClass, errors.name && "border-red-500")}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </motion.div>
            <motion.div
              onMouseEnter={() => setSize(80)}
              onMouseLeave={() => setSize(40)}
              variants={bounceAnimation}
              className={InputDivClass}
            >
              <label className={LabelClass}>Phone</label>
              <input
                id="phone"
                type="phone"
                placeholder="0412345636"
                className={cn(InputClass, errors.phone && "border-red-500")}
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </motion.div>
            <motion.div
              onMouseEnter={() => setSize(80)}
              onMouseLeave={() => setSize(40)}
              variants={bounceAnimation}
              className={cn(InputDivClass, "col-span-2")}
            >
              <label className={LabelClass}>Email</label>
              <input
                id="email"
                type="email"
                placeholder="bill-nye@gmail.com"
                className={cn(InputClass, errors.email && "border-red-500")}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </motion.div>
            <motion.div
              onMouseEnter={() => setSize(80)}
              onMouseLeave={() => setSize(40)}
              variants={bounceAnimation}
              className={cn(InputDivClass, "col-span-2")}
            >
              <label className={LabelClass}>Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder="This is a message"
                className={cn(InputClass, errors.message && "border-red-500")}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </motion.div>
            <motion.div
              variants={bounceAnimation}
              className={cn(InputDivClass, "col-span-2")}
            >
              <motion.button
                type="submit"
                className="relative z-10 rounded-xl bg-white px-8 py-4 w-full text-lg text-black lg:px-12 lg:text-2xl"
                initial={{
                  backgroundColor: "#F7F7F7",
                  color: "#0A0A0A",
                  scale: 1,
                }}
                whileHover={{
                  backgroundColor: "#393FEC",
                  color: "#F7F7F7",
                  scale: 1.05,
                }}
                transition={{duration: 0.2, ease: "easeOut"}}
              >
                Send Message
              </motion.button>
            </motion.div>
          </motion.main>
        )}
      </Container>
    </form>
  );
}
