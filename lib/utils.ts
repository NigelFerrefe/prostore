import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//This is used to have dynamic classes

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
