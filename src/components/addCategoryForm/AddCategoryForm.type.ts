import { z } from "zod";

export const categoryschema = z.object({
  category_name: z.string().min(1, "Category is required"),
});

export type CategorySchema = z.infer<typeof categoryschema>;

export const dishesSchema = z.object({
  dish_name: z.string().min(1,"Enter dish name"),
  price: z.number().min(1, "Enter only four digit"),
  category_id: z.coerce.number(),
});

export type DishesSchema = z.infer<typeof dishesSchema>;
