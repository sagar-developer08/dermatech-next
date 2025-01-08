import React from "react";

const StaticFaqsLisiting = () => {
  const staticFaqs = [
    {
      question: "What distinguishes Dermatech Polyclinic from other clinics?",
      answer:
        "Dermatech Polyclinic stands out through its commitment to personalized care, cutting-edge treatments, and a team of skilled practitioners dedicated to achieving transformative results.",
    },
    {
      question: "Can I book an appointment online?",
      answer:
        "Yes, booking an appointment is convenient with our online booking system on the website. Alternatively, you can contact us through [provide contact details]",
    },
    {
      question: "Are the consultations at Dermatech Polyclinic free?",
      answer:
        "Yes, we offer complimentary consultations to discuss your concerns, assess your needs, and recommend suitable treatments.",
    },
    {
        question: "How long does a typical appointment last?",
        answer:
          "Appointment durations vary based on the specific treatment or consultation. Our team will provide you with an estimated duration during the booking process.",
      },
      

  ];

  return (
    <div style={{ flex: "100%", width: "100%" }}>
      <div className="accordion" id="accordionExample">
        {staticFaqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticFaqsLisiting;
