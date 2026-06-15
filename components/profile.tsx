const Profile = () => {
  return (
    <div className="mt-4 mb-12 sm:my-12 mx-auto">
      <div className="bg-white border border-border-strong p-6 sm:p-8">
        <div className="flex items-center gap-4 pb-6 border-b border-border">
          <img
            className="h-14 w-14 rounded-full object-cover"
            src="https://res.cloudinary.com/dzlhvpfmo/image/upload/v1695559567/syu-blog/syu_dyduwv.png"
            alt="Syu Onoda のアイコン"
          />
          <div>
            <p className="font-semibold text-fg">Syu Onoda</p>
            <p className="text-sm text-fg-muted">@konjikicity</p>
          </div>
        </div>

        <div className="flex items-start py-6 border-b border-border">
          <p className="text-sm font-semibold text-fg w-1/3">Account</p>
          <div className="flex flex-col gap-1">
            <a
              href="https://twitter.com/konjikicity"
              className="text-sm text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://github.com/konjikicity"
              className="text-sm text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        <div className="flex items-center py-6 border-b border-border">
          <p className="text-sm font-semibold text-fg w-1/3">Job</p>
          <p className="text-sm text-fg-muted">Web Engineer</p>
        </div>

        <div className="sm:flex sm:items-start py-6 border-b border-border">
          <p className="text-sm font-semibold text-fg w-1/3 pb-4 sm:pb-0">About</p>
          <div className="flex flex-col gap-2 text-sm text-fg-muted">
            <p>ネトゲ廃人→飲食店勤務→Web Engineer</p>
            <p>リモートでWeb Engineerとして勤務中</p>
            <p>ポジション・技術にとらわれないフルスタックなエンジニアを目指しています。</p>
          </div>
        </div>

        <div className="sm:flex sm:items-start py-6 border-b border-border">
          <p className="text-sm font-semibold text-fg w-1/3 pb-4 sm:pb-0">Experience</p>
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-medium text-fg-muted uppercase tracking-wide mb-3">Language</p>
              <div className="flex items-center gap-4">
                <img
                  className="h-10 w-10"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  alt="PHP"
                />
                <img
                  className="h-10 w-10"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg"
                  alt="Ruby"
                />
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-fg-muted uppercase tracking-wide mb-3">Backend</p>
              <div className="flex items-center gap-4">
                <img
                  className="h-10 w-10"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
                  alt="Laravel"
                />
                <img
                  className="h-10 w-10"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg"
                  alt="Rails"
                />
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-fg-muted uppercase tracking-wide mb-3">Frontend</p>
              <div className="flex items-center gap-4">
                <img
                  className="h-10 w-10"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                />
                <img
                  className="h-10 w-10"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                />
                <img
                  className="h-10 w-10"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                  alt="Vue.js"
                />
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-fg-muted uppercase tracking-wide mb-3">DevTool</p>
              <div className="flex items-center gap-4">
                <img
                  className="h-10 w-10"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                />
                <img
                  className="h-10 w-10"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg"
                  alt="Docker"
                />
                <img
                  className="h-10 w-10"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                  alt="PostgreSQL"
                />
                <img
                  className="h-10 w-10"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  alt="MySQL"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-start mt-6">
          <p className="text-sm font-semibold text-fg w-1/3 pb-4 sm:pb-0">Articles</p>
          <div className="flex flex-col gap-3">
            <a
              href="https://note.com/konjikicity/n/n64442baaa971"
              className="text-sm text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              ネトゲ廃人で引きこもりだった僕がエンジニアになるまで
            </a>
            <a
              href="https://qiita.com/konjikicity/items/005cda4b9248803efa7e"
              className="text-sm text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              【個人開発】母音法を広めたい！劇団四季も使っている『母音法』で発声練習ができるサービス『BOIトレ ~ 母音法で発声練習 ~』をリリースしました！
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
