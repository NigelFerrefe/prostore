import { ensureCartSession } from "@/lib/actions/cart-session";
import CartTable from "./cart-table";
import { getMyCart } from "@/lib/actions/cart-actions";

export const metadata = {
    title: 'Shooping Cart',
}

const CartPage = async () => {
      const sessionCartId = await ensureCartSession();
    const cart = await getMyCart(sessionCartId);

    return ( <>
    <CartTable cart={cart}/>
    </> );
}
 
export default CartPage;