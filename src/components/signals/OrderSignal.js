import { signal } from "@preact/signals-react";

export const paymentMethod = signal(['bank', 'card', 'mobilepay', 'invoice']);