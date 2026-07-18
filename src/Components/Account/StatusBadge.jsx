import React from "react";

// Central status -> color mapping so every page (Orders, Returns, Track Order...)
// renders the same badge style for the same status word.
const STATUS_STYLES = {
  Delivered: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  Approved: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  Completed: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  Pending: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  Shipped: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  Confirmed: "bg-blue-500/15 text-blue-400 border border-blue-500/30",
  Cancelled: "bg-red-500/15 text-red-400 border border-red-500/30",
  Rejected: "bg-red-500/15 text-red-400 border border-red-500/30",
  Default: "bg-purple-500/15 text-purple-400 border border-purple-500/30",
};

const StatusBadge = ({ status, className = "" }) => {
  const style = STATUS_STYLES[status] || STATUS_STYLES.Default;
  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${style} ${className}`}>
      {status}
    </span>
  );
};

export default StatusBadge;