
export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  // Using EmailJS for automatic email sending
  // Note: This requires EmailJS setup with your own service ID, template ID, and public key
  
  try {
    // For now, we'll use a simple mailto approach with better UX
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `;
    
    const mailtoLink = `mailto:kenny5dsouza@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    return { success: true, message: 'Email client opened successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
};
