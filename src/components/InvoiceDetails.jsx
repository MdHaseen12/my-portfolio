import {
  X,
  Download,
  Send,
  MoreHorizontal,
  CalendarDays,
  User,
  Mail,
  CreditCard,
} from "lucide-react";
import { motion } from "framer-motion";

function InvoiceDetails({ invoice, onClose }) {
  if (!invoice) {
    return (
      <div className="invoice-empty">
        <div className="invoice-empty-icon">
          <CreditCard size={24} />
        </div>

        <h3>Select an invoice</h3>

        <p>
          Choose an invoice from the list to view its details.
        </p>
      </div>
    );
  }

  return (
    <motion.aside
      className="invoice-details"
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="details-header">
        <div>
          <span className="details-label">INVOICE</span>
          <h2>{invoice.id}</h2>
        </div>

        <button
          className="details-close"
          onClick={onClose}
        >
          <X size={18} />
        </button>
      </div>

      <div className="details-status-row">
        <span
          className={`status-badge ${invoice.status.toLowerCase()}`}
        >
          {invoice.status}
        </span>

        <button className="details-more">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="details-amount">
        <span>Total amount</span>

        <strong>
          ₹{invoice.amount.toLocaleString("en-IN")}
        </strong>
      </div>

      <div className="details-divider"></div>

      <div className="details-info">

        <div className="details-info-item">
          <div className="details-info-icon">
            <User size={16} />
          </div>

          <div>
            <span>Client</span>
            <strong>{invoice.client}</strong>
          </div>
        </div>

        <div className="details-info-item">
          <div className="details-info-icon">
            <Mail size={16} />
          </div>

          <div>
            <span>Email</span>
            <strong>{invoice.email}</strong>
          </div>
        </div>

        <div className="details-info-item">
          <div className="details-info-icon">
            <CalendarDays size={16} />
          </div>

          <div>
            <span>Invoice date</span>
            <strong>{invoice.date}</strong>
          </div>
        </div>

        <div className="details-info-item">
          <div className="details-info-icon">
            <CalendarDays size={16} />
          </div>

          <div>
            <span>Due date</span>
            <strong>{invoice.due}</strong>
          </div>
        </div>

      </div>

      <div className="details-divider"></div>

      <div className="details-actions">

        <button className="details-primary">
          <Send size={16} />
          Send invoice
        </button>

        <button className="details-secondary">
          <Download size={16} />
          Download
        </button>

      </div>
    </motion.aside>
  );
}

export default InvoiceDetails;