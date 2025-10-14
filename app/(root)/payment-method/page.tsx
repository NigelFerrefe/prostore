import { auth } from "@/auth";
import CheckoutSteps from "@/components/ui/shared/checkout-steps";
import { getMyCart } from "@/lib/actions/cart-actions";
import { ensureCartSession } from "@/lib/actions/cart-session";
import { getUserByID } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import PaymentMethodForm from "./payment-method-form";

export const metadata = {
  title: "Select Payment Method",
};

const PaymentMethodPage = async () => {
  const sessionCartId = await ensureCartSession();
  const cart = await getMyCart(sessionCartId);
  if (!cart || cart.items.length === 0) redirect("/cart");

  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) throw new Error("No user ID");
  const user = await getUserByID(userId);


  return (
    <>
      <CheckoutSteps current={2} />
      <PaymentMethodForm preferredPaymentMethod={user.paymentMethod} />
    </>
  );
};

export default PaymentMethodPage;
