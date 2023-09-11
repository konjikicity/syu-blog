import { Card, CardBody } from "../components/style";

const Profile = () => {
  return (
    <>
      <div className="text-white mt-12  mb-32">
        <Card className="w-full text-[#DDE6ED] bg-[#27374D] justify-between p-4">
          <CardBody>
            <div>
              <p className="text-lg font-bold">About</p>
              <div className="border border-gray-700"></div>
              <p className="text-lg font-bold">Experience</p>
              <div className="border border-gray-700"></div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Profile;
