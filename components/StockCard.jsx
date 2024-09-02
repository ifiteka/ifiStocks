import Link from "next/link";
import React from "react";

const StockCard = ({ stock, userId, ...props }) => {
  return (
    <Link
      href={`/${userId}/market/${stock.id}`}
      {...props}
      className="w-full py-6 flex items-center justify-between"
    >
      <p className="uppercase font-semibold text-xl">{stock.name}</p>

      <div>
        <p>{stock.price}</p>
      </div>
    </Link>
  );
};

export default StockCard;