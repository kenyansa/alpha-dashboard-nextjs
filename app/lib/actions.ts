'use server';
import { z } from "zod";

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});
export async function createInvoice(formData: FormData) {
    const rawFormData = {
        
    };
    //checking:
    console.log(rawFormData);
}