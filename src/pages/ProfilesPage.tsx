import { CSSProperties } from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {profiles.map((profile) => (
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "skyblue", fontWeight: "bold" } : {}
            }
            to={`/profiles/${profile}`}
          >
            Profile {profile}
          </NavLink>
        ))}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilesPage;
