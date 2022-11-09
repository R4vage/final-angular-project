export interface MainCategoriesResponse {
  categories: Categories;
}

export interface Categories {
  href: string;
  items: CategoryItem[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

export interface CategoryItem {
  href: string;
  icons: Icon[];
  id: string;
  name: string;
}

export interface Icon {
  height: number | null;
  url: string;
  width: number | null;
}
