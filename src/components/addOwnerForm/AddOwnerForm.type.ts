import {z} from 'zod';

export const schema=z.object(
    {
        username:z.string().min(1,'Name is required'),
        password:z.string().min(1,"Password is required")
    }

)

export type Schema=z.infer<typeof schema>