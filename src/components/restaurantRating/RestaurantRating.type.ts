import { z } from "zod";

export const restaurantRatingSchema = z.object({
  ambience_rating: z.coerce
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at upto 5"),
  service_rating: z.coerce
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at upto 5"),
  food_rating: z.coerce
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at upto 5"),
  cleanliness_rating: z.coerce
    .number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must be at upto 5"),
  comment: z.string(),
});

export type RestaurantRating = z.infer<typeof restaurantRatingSchema>;
