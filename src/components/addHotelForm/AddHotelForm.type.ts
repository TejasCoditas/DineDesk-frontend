import {z} from 'zod';

export const schema=z.object(
    {
        restaurant_name:z.string().min(1,'Name is required'),
        address:z.string().min(1,"address is required"),
        contact:z.string().min(1,"Enter contact number"),
        image_url:z.string()
    }

)

export type Schema=z.infer<typeof schema>