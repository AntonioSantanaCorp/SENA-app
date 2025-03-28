export type DataTable = {
  isLoading: boolean;
  filters: { query: string };
  pagination: { page: number; pageSize: number };
};
