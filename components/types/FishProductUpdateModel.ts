
type FishProductUpdateModel = {
    name?: string | null;
    description?: string | null;
    descriptionDetail?: string | null;
    stockQuantity?: number | null; // Assuming int32 means number
    price?: number | null; // Assuming double means number
    originalPrice?: number | null; // Assuming double means number
    deleteImages?: (string | null)[] | null; // Assuming UUID format for image identifiers
    updateImages?: (string | null)[] | null; // Assuming binary data represented as string
    fishModel?: FishUpdateRequestModel | null; // Optional and nullable
  };