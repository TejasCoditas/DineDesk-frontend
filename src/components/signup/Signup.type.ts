import {z} from 'zod';

export const schema=z.object({
    username:z.string().min(4,"Please Enter the Username"),
    password:z.string().min(6,"Please enter Atleast 6 chars")
})

export type Schema=z.infer<typeof schema>