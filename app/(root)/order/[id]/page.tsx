import { getOrderById } from "@/lib/actions/order.actions";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import OrderDetailsTable from "./order-details-table";
import { ShippingAddress } from "@/types";

export const metadata: Metadata = {
  title: "Order Details",
};

const OrderDetailsPage = async (props: { params: Promise<{ id: string }> }) => {
  const { id } = await props.params;

  const order = await getOrderById(id);
  if (!order) notFound();
  return (
    <OrderDetailsTable
      order={{
        ...order,
        shippingAddress: order.shippingAddress as ShippingAddress,
        itemsPrice: Number(order.itemsPrice),
        shippingPrice: Number(order.shippingPrice),
        taxPrice: Number(order.taxPrice),
        totalPrice: Number(order.totalPrice),
        orderitems: order.orderitems.map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ({ orderId, price, ...rest }: any) => ({
            ...rest,
            price: Number(price),
          })
        ),
      }}
      paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"}
    />
  );
};

export default OrderDetailsPage;
