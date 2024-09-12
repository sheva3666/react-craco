export type User = {
  name: string;
  email: string;
} | null;

export type UserContextType = {
  user: User;
  login: (name: string, email: string) => void;
  logout: () => void;
};
