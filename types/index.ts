import {z} from 'zod';
import { insertProductsSchema } from '@/lib/validators';
export type Product = z.infer<typeof insertProductsSchema> & {
    //Next value are not in the schema 
    id: string; 
    rating: number;
    createdAt: Date;
}