import { Card, CardBody } from "../components/style";
import Image from "next/image";
import avaterImage from "../public/assets/blog/authors/syu.png";

const Profile = () => {
  return (
    <>
      <div className="text-white mt-4 mb-12 sm:my-12 mx-auto">
        <Card className="w-full text-[#DDE6ED] bg-[#27374D] sm:p-4">
          <CardBody>
            <div>
              <div className="flex items-center font-bold pb-6">
                <Image
                  className="mr-4 h-14 w-14"
                  src={avaterImage}
                  alt="開発者画像"
                />
                <div className="flex flex-col">
                  <p>Syu Onoda</p>
                  <p>@konjikicity</p>
                </div>
              </div>
              <div className="border border-gray-700"></div>
              <div className="flex items-center py-6">
                <p className="text-lg font-bold w-1/3">Account</p>
                <div className="mx-auto sm:mx-0 flex items-center sm:block">
                  <a
                    href="https://twitter.com/konjikicity"
                    className="block mr-2 sm:mr-0 text-blue-500 hover:underline hover:opacity-50"
                    target="_blank"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://github.com/konjikicity"
                    className="sm:mt-1 block text-blue-500 hover:underline hover:opacity-50"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
              <div className="border border-gray-700"></div>
              <div className="flex items-center py-6">
                <p className="text-lg font-bold w-1/3">Job</p>
                <p className="block mx-auto sm:mx-0">Web Engineer</p>
              </div>
              <div className="border border-gray-700"></div>
              <div className="sm:flex sm:items-center py-6">
                <p className="text-lg font-bold w-1/3 pb-4 sm:pb-0">About</p>
                <div className="flex flex-col">
                  <p>ネトゲ廃人→飲食店勤務→Web Engineer</p>
                  <p className="mt-4">リモートでWeb Engineerとして勤務中</p>
                  <p className="mt-1">
                    ポジション・技術にとらわれないフルスタックなエンジニアを目指しています。
                  </p>
                </div>
              </div>
              <div className="border border-gray-700"></div>
              <div className="sm:flex sm:items-center py-6">
                <p className="text-lg font-bold w-1/3 pb-4 sm:pb-0">
                  Experience
                </p>
                <div className="flex flex-col">
                  <p className="text-lg font-medium w-1/3">Languege</p>
                  <div className="flex items-center">
                    <img
                      className="mt-2 mr-4 h-14 w-14"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                    />
                    <img
                      className="mt-2 h-14 w-14"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg"
                    />
                  </div>
                  <p className="mt-6 text-lg font-medium w-1/3">Backend</p>
                  <div className="flex items-center">
                    <img
                      className="mt-2 mr-4 h-14 w-14"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg"
                    />
                    <img
                      className="mt-2 h-14 w-14"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg"
                    />
                  </div>
                  <p className="mt-6 text-lg font-medium w-1/3">Frontend</p>
                  <div className="flex items-center">
                    <img
                      className="mr-4 mt-2 h-14 w-14"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                    />
                    <img
                      className="mt-2 mr-4 h-14 w-14"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    />
                    <img
                      className="mt-2 h-14 w-14"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                    />
                  </div>
                  <p className="mt-6 text-lg font-medium w-1/3">DevTool</p>
                  <div className="flex items-center">
                    <img
                      className="mt-2 mr-4 h-14 w-14"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    />
                    <img
                      className="mt-2 mr-4 h-14 w-14"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg"
                    />
                    <img
                      className="mt-2 mr-4 h-14 w-14"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                    />
                    <img
                      className="mt-2 mr-4 h-14 w-14"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-gray-700"></div>
              <div className="sm:flex sm:items-center mt-6">
                <p className="text-lg font-bold w-1/3">Articles</p>
                <div className="flex flex-col">
                  <a
                    href="https://note.com/konjikicity/n/n64442baaa971"
                    className="mb-4 text-blue-500 hover:underline hover:opacity-50"
                    target="_blank"
                  >
                    ネトゲ廃人で引きこもりだった僕がエンジニアになるまで
                  </a>
                  <a
                    href="https://qiita.com/konjikicity/items/005cda4b9248803efa7e"
                    className="text-blue-500 hover:underline hover:opacity-50"
                    target="_blank"
                  >
                    【個人開発】母音法を広めたい！劇団四季も使っている『母音法』で発声練習ができるサービス『BOIトレ
                    ~ 母音法で発声練習 ~』をリリースしました！
                  </a>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Profile;
