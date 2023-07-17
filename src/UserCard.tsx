import { User } from "./hooks/useApis";

const UserCard = ({ user }: { user: User }) => {
  return (
    <section
      id={`user-card-${user.id}`}
      className={`user-card-container`}
      style={{ marginTop: 24 }}
    >
      <main>
        <div
          className="content"
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #cecece",
            borderRadius: 8,
            gap: 24,
            padding: 24,
            minHeight: 100,
          }}
        >
          <img
            src={user.avatar}
            alt={user.name}
            style={{ maxHeight: 64, borderRadius: "50%" }}
          />
          <h3>{user.name}</h3>
        </div>
      </main>
    </section>
  );
};

export default UserCard;
