import { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronRight,
} from "lucide-react";

const invoices = [
  {
    id: "INV-2026-001",
    client: "TechNova Solutions",
    email: "accounts@technova.com",
    amount: 48500,
    status: "Paid",
    date: "Sep 24, 2026",
    due: "Sep 24, 2026",
  },
  {
    id: "INV-2026-002",
    client: "Vertex Digital",
    email: "finance@vertex.com",
    amount: 72600,
    status: "Pending",
    date: "Sep 22, 2026",
    due: "Oct 05, 2026",
  },
  {
    id: "INV-2026-003",
    client: "BluePeak Labs",
    email: "billing@bluepeak.com",
    amount: 32800,
    status: "Overdue",
    date: "Sep 12, 2026",
    due: "Sep 20, 2026",
  },
  {
    id: "INV-2026-004",
    client: "Nexa Industries",
    email: "accounts@nexa.com",
    amount: 91500,
    status: "Paid",
    date: "Sep 10, 2026",
    due: "Sep 10, 2026",
  },
  {
    id: "INV-2026-005",
    client: "Orbit Systems",
    email: "finance@orbit.com",
    amount: 56750,
    status: "Pending",
    date: "Sep 06, 2026",
    due: "Oct 12, 2026",
  },
];

function formatAmount(amount) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

function InvoiceTable({
  selectedInvoice,
  onSelectInvoice,
}) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredInvoices = useMemo(() => {
    return invoices.filter((invoice) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        invoice.id.toLowerCase().includes(searchText) ||
        invoice.client.toLowerCase().includes(searchText) ||
        invoice.email.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All" ||
        invoice.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <section className="invoice-section">

      {/* HEADER */}

      <div className="invoice-header">

        <div>
          <h2>Invoices</h2>

          <p>
            {filteredInvoices.length} of {invoices.length} invoices
          </p>
        </div>


        <div className="invoice-actions">

          {/* SEARCH */}

          <div className="invoice-search">

            <Search size={16} />

            <input
              type="text"
              placeholder="Search invoices..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

          </div>


          {/* FILTER */}

          <div className="filter-wrapper">

            <SlidersHorizontal size={16} />

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
            >
              <option value="All">All</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select>

          </div>

        </div>

      </div>


      {/* TABLE */}

      <div className="invoice-table">

        <div className="invoice-row invoice-table-header">

          <span>Invoice</span>
          <span>Client</span>
          <span>Amount</span>
          <span>Status</span>
          <span>Due date</span>
          <span></span>

        </div>


        {filteredInvoices.length > 0 ? (

          filteredInvoices.map((invoice) => {

            const isSelected =
              selectedInvoice?.id === invoice.id;

            return (
              <div
                className={`invoice-row ${
                  isSelected ? "selected" : ""
                }`}
                key={invoice.id}
                onClick={() =>
                  onSelectInvoice(invoice)
                }
              >

                <div className="invoice-number">
                  <strong>{invoice.id}</strong>
                  <span>{invoice.date}</span>
                </div>


                <div className="invoice-client">
                  <strong>{invoice.client}</strong>
                  <span>{invoice.email}</span>
                </div>


                <strong className="invoice-amount">
                  {formatAmount(invoice.amount)}
                </strong>


                <span
                  className={`status-badge ${invoice.status.toLowerCase()}`}
                >
                  {invoice.status}
                </span>


                <span className="invoice-due">
                  {invoice.due}
                </span>


                <button
                  className="invoice-arrow"
                  onClick={(event) => {
                    event.stopPropagation();
                    onSelectInvoice(invoice);
                  }}
                >
                  <ChevronRight size={17} />
                </button>

              </div>
            );
          })

        ) : (

          <div className="no-invoices">
            <Search size={22} />

            <strong>No invoices found</strong>

            <span>
              Try a different search or filter.
            </span>
          </div>

        )}

      </div>

    </section>
  );
}

export { invoices };

export default InvoiceTable;