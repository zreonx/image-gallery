import { useParams } from "react-router-dom";
const ProfilePage = () => {
  const params = useParams<{ profileId: string | undefined }>();
  console.log(params);

  return (
    <div>
      <h1>Profile page {params.profileId}</h1>
    </div>
  );
};

export default ProfilePage;
