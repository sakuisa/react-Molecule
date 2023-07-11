import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `saku${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@example.com",
    phone: "090-1111-2222",
    company: {
      name: "testcampany",
    },
    website: "https://google.com",
  };
});

export const Users = () => {
  return (
    <SConainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SConainer>
  );
};

const SConainer = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
