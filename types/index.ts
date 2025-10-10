import {z} from 'zod';
import { insertProductsSchema, insertCartSchema, cartItemSchema, shippingAddressSchema } from '@/lib/validators';


export type Product = z.infer<typeof insertProductsSchema> & {
    //Next value are not in the schema 
    id: string; 
    rating: number;
    createdAt: Date;
}

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>
export type ShippingAddress = z.infer<typeof shippingAddressSchema>