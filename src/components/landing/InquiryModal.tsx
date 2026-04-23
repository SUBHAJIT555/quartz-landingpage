"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type InquiryForm = {
  fullName: string;
  email: string;
  message: string;
};

type InquiryErrors = Partial<Record<keyof InquiryForm, string>>;

export function InquiryModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<InquiryForm>({
    fullName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<InquiryErrors>({});

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      setSubmitted(false);
    };
    window.addEventListener("openInquiryModal", onOpen);
    return () => window.removeEventListener("openInquiryModal", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open || !submitted) return;
    const timer = window.setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setErrors({});
    }, 5000);
    return () => window.clearTimeout(timer);
  }, [open, submitted]);

  const closeModal = () => {
    setOpen(false);
    setSubmitted(false);
    setErrors({});
  };

  const validateForm = (data: InquiryForm) => {
    const nextErrors: InquiryErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }
    if (!data.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(data.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (data.message.trim() && data.message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/55 p-4"
      onClick={closeModal}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between">
          <div className="space-y-3">
            <Image
              src="/logo/quartz_dark_logo.webp"
              alt="Quartz"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
            <h3 className="mt-2 text-2xl font-semibold text-zinc-900">
              Join the Inner Circle
            </h3>
          </div>
          <button
            type="button"
            onClick={closeModal}
            className="rounded-md p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="space-y-4 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <h4 className="text-lg font-semibold text-zinc-900">
              Request submitted successfully.
            </h4>
            <p className="text-sm text-zinc-600">
              Thanks for reaching out. Our team will contact you shortly.
            </p>
            <button
              type="button"
              onClick={closeModal}
              className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="space-y-3" onSubmit={handleSubmit} noValidate>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-zinc-600">
                Full name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    fullName: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
              />
              {errors.fullName ? (
                <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
              ) : null}
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-zinc-600">
                Email address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
              />
              {errors.email ? (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              ) : null}
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.08em] text-zinc-600">
                Message <span className="text-zinc-500">(optional)</span>
              </label>
              <textarea
                placeholder="Tell us what you are looking for"
                rows={4}
                value={formData.message}
                onChange={(event) =>
                  setFormData((prev) => ({
                    ...prev,
                    message: event.target.value,
                  }))
                }
                className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-zinc-500"
              />
              {errors.message ? (
                <p className="mt-1 text-xs text-red-600">{errors.message}</p>
              ) : null}
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              <span className="mr-2 inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                </svg>
              </span>
              <span>Submit</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
