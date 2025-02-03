'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }
  return true;
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const senderName = formData.get('senderName');
  const subject = formData.get('subject');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return { error: 'Invalid sender email' };
  }

  if (!validateString(senderName, 500)) {
    return { error: 'Invalid sender name' };
  }

  if (!validateString(subject, 500)) {
    return { error: 'Invalid subject' };
  }
  if (!validateString(message, 500)) {
    return { error: 'Invalid message' };
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'sasankmukkamala2303@gmail.com',
      replyTo: senderEmail as string,
      subject: subject as string,
      text: `From: ${senderName}\nEmail: ${senderEmail}\nSubject: ${subject}\nMessage: ${message}`,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    } else if (error && typeof error === 'object' && 'message' in error) {
      return {
        error: error.message,
      };
    }
    return {
      error: 'An unknown error occurred',
    };
  }
};
