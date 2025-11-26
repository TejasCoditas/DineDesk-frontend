export interface HeaderProps {
  role: "admin" | "customer" | "owner" | null;
  search?: string;
  onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchState {
  search: string;
}

export type Action = { type: "SET_SEARCH"; payload: string };

export const initialState: SearchState = { search: "" };

export const searchReducer = (
  state: SearchState,
  action: Action
): SearchState => {
  switch (action.type) {
    case "SET_SEARCH":
      return { search: action.payload };
    default:
      return state;
  }
};
