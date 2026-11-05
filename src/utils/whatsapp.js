import { COMPANY_CONFIG } from '../data/config';

/**
 * Open WhatsApp with a prefilled message.
 * @param {string} message - Plain text message
 */
export const openWhatsApp = (message) => {
  const number = COMPANY_CONFIG.whatsappNumber;
  const encodedText = encodeURIComponent(message.trim());
  const url = `https://wa.me/${number}?text=${encodedText}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

/**
 * Format Indian Rupee currency with commas
 * @param {number} amount
 * @returns {string} e.g. "₹54,087"
 */
export const formatINR = (amount) => {
  if (amount === undefined || amount === null) return "";
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Generate and trigger WhatsApp enquiry for a specific product
 * Matches the required format:
 * "Hello Bounten Team,
 * 
 * I am interested in your product: Descaler.
 * 
 * Product Price: ₹2,748
 * 
 * Please share more details about this product.
 * 
 * Thank you."
 */
export const openProductEnquiry = (product) => {
  const priceDisplay = formatINR(product.price);
  const message = `Hello Bounten Team,

I am interested in your product: ${product.name}.

Product Price: ${priceDisplay}

Please share more details about this product.

Thank you.`;

  openWhatsApp(message);
};

/**
 * Generate and trigger WhatsApp enquiry for services
 */
export const openServiceEnquiry = (serviceName = "Genuine Bounten Service") => {
  const message = `Hello Bounten Team,

I would like to book a service / enquiry for: ${serviceName}.

Please connect me with a Bounten certified service technician.

Thank you.`;

  openWhatsApp(message);
};

/**
 * Generate and trigger WhatsApp enquiry for solutions
 */
export const openSolutionEnquiry = (solutionName) => {
  const message = `Hello Bounten Team,

I am interested in Bounten Water Treatment Solutions for: ${solutionName}.

Please share feasibility, flow capacity recommendations, and a consultation proposal.

Thank you.`;

  openWhatsApp(message);
};

/**
 * General contact enquiry
 */
export const openGeneralEnquiry = () => {
  const message = `Hello Bounten Team,

I would like to enquire about your salt-free water softener and water treatment solutions.

Please share more information with me.

Thank you.`;

  openWhatsApp(message);
};

