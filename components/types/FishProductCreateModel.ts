type FishProductCreateModel = {
    name?: string | null;
    description?: string | null;
    descriptionDetail?: string | null;
    stockQuantity?: number | null; // Assuming int32 means number
    price?: number | null; // Assuming double means number
    originalPrice?: number | null; // Assuming double means number
    imageFiles?: (string | null)[] | null; // Assuming binary data is represented as a string
    fishModel: FishCreateRequestModel;
    fishAward?: (FishAwardCreateRequestModel | null)[] | null;
  };