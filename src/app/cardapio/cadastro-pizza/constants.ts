export const PIZZA_SIZES = [
  {
    id: 'small',
    label: 'Pizza pequena',
  },
  {
    id: 'large',
    label: 'Pizza grande',
  }
] as const;

export const AVAILABILITY_OPTIONS = [
  {
    value: 'available',
    label: 'Disponível'
  },
  {
    value: 'unavailable',
    label: 'Indisponível'
  }
] as const;

export const ALLOWED_FILE_TYPES = ['jpg', 'jpeg', 'png', 'heic'];
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const MIN_IMAGE_RESOLUTION = 500; // 500x500
