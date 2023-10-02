import Image from "next/image";
import Link from "next/link";
import RunteqLogo from "../public/dev/RUNTEQ-Q-A.png";
import BoitoreLogo from "../public/dev/boitore.png";
import { Card, CardBody, CardHeader, Typography } from "../components/style";

const MyDevelop = () => {
  return (
    <div className="text-white sm:grid sm:grid-cols-2 sm:gap-6 my-12">
      <Link href="https://runteq-qanda.fly.dev" target="_blank">
        <Card className="w-full overflow-hidden hover:opacity-50">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <Image className="h-52 sm:h-72" src={RunteqLogo} alt="runteq" />
          </CardHeader>
          <CardBody className="bg-[#27374D]">
            <Typography variant="h4" color="white">
              RUNTEQ QandA
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mt-3 font-normal"
            >
              エンジニアスクール在学中に作成したCRUDアプリです。
            </Typography>
          </CardBody>
        </Card>
      </Link>
      <Link href="https://boitore.fly.dev" target="_blank">
        <Card className="mt-4 sm:mt-0 w-full overflow-hidden hover:opacity-50">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none"
          >
            <Image className="h-52 sm:h-72" src={BoitoreLogo} alt="boitre" />
          </CardHeader>
          <CardBody className="bg-[#27374D]">
            <Typography variant="h4" color="white">
              Boiトレ
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mt-3 font-normal"
            >
              劇団四季も使用している「母音法」を使って発声練習ができる
              個人開発サービスです。
            </Typography>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default MyDevelop;
