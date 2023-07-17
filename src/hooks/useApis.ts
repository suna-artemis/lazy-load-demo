export type User = {
  id: string;
  name: string;
  age: number;
  avatar: string;
};

// interface GetUsersProp {
//   page: number;
//   limit: number;
//   reqEndCallback: (shouldIncrementPage: boolean) => void;
// }

// export const useGetUsers = ({
//   page,
//   limit,
//   reqEndCallback,
// }: GetUsersProp): [User[], (shouldIncrementPage: boolean) => void] => {
//   const [users, setUsers] = useState<User[]>([]);

//   const fetchUsers = useCallback(
//     (shouldIncrementPage: boolean) => {
//       delay(async () => {
//         const res = await fetch(
//           `https://64b26cc538e74e386d55186e.mockapi.io/api/v1/users?page=${page}&limit=${limit}`
//         );
//         const jsonRes = await res.json();
//         setUsers((preUsers) => [...preUsers, ...jsonRes]);
//         reqEndCallback(shouldIncrementPage);
//       }, 2000);
//     },
//     [limit, page, reqEndCallback]
//   );

//   return [users, fetchUsers];
// };
