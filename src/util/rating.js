export const Rating = Object.freeze({
  VERY_WEAK: Symbol('veryweak'),
  WEAK: Symbol('weak'),
  MEDIUM: Symbol('medium'),
  STRONG: Symbol('strong'),
  UNKNOWN: Symbol('unknown')
});

// Transforms rating into array representation
export function toArray (rating) {
  switch (rating) {
    case Rating.VERY_WEAK:
      return [1, 0, 0, 0];
    case Rating.WEAK:
      return [1, 1, 0, 0];
    case Rating.MEDIUM:
      return [1, 1, 1, 0];
    case Rating.STRONG:
      return [1, 1, 1, 1];
    default:
      return [0, 0, 0, 0];
  }
}

// Calculates rating based on included character fields
export function calculateNumeric (charFields) {
  switch(charFields.size) {
    case 1:
      return Rating.VERY_WEAK;
    case 2:
      return Rating.WEAK;
    case 3:
      return Rating.MEDIUM;
    case 4:
      return Rating.STRONG;
    default:
      return Rating.UNKNOWN;
  }
}
