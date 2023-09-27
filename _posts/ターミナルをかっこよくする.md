---
title: "Macのターミナルをかっこよくしよう"
date: "2023-09-27"
tags:
  - "devTool"
---

## 見た目の重要性

おしゃれなツールやデバイスを使っている人を見ると、憧れますよね。
ただデバイスはものすごく高かったりして手が出ません。
ですが、ツールは設定で見た目を変更できることが多いです。
一度設定してしまえば自分好みでずっと使用できるのでおすすめです。

今回はエンジニアであれば必ず使うであろうターミナルをカスタマイズしていきます。

## 自分の今の見た目

![zsh theme](https://res.cloudinary.com/dzlhvpfmo/image/upload/v1695489549/syu-blog/my-zsh%20pf7baz.png)
ターミナル自体は透過させており、背景はPCの壁紙となります。(ちなみにrazer好きです)
とりあえずこんな感じの見た目にするやり方をご紹介いたします。

## iTerm2

デフォルトのターミナルはデザインを変化させづらいので、
より多機能でデザインをカスタムしやすい[iTerm2](https://iterm2.com/index.html)を使用します。
GUIで設定を変更できるので初心者にもおすすめです。

ダウンロードページからダウンロードするか
[homebrew](https://brew.sh/)が入っている方は、下記コマンドでもインストールできます。

```shell
$ brew install --cask iterm2
```

https://iterm2.com/index.html

## iTerm2で見た目の変更

### フォントの変更

まずフォントを変えていきましょう。

下記フォントを使用します。
[MesloLGS NF Regular](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
他のフォントでもいいのですが、後述する[powerlevel10k](https://github.com/romkatv/powerlevel10k)にて
推奨されているフォントのためこちらを使用いたします。

リンクをクリックするとダウンロードできるので、そのファイルを
ダブルクリックするとフォントのインストールができます。

iterm2の設定画面で設定をしていきます。

`settings > Profiles > text`

①　インストールしたMeslo LGS NF に変更
②　フォントサイズを17pxに変更(ここは好み)

![iterm font](https://res.cloudinary.com/dzlhvpfmo/image/upload/v1695313967/syu-blog/iterm-font_xj2qhd.png)

### windowの設定

`settings > Profiles > window`

① 　Transparencyは`透過度`でBlurは`ぼかし`です。完全に透過したいのでBlurは0でTransparencyを35くらいに設定します。
② 　Styleは`No title Bar`を選択すると上のタイトルバーが消えてかっこよくなります。

![iterm window](https://res.cloudinary.com/dzlhvpfmo/image/upload/v1695396977/syu-blog/window_pg53hz.png)

### カラースキームの設定

`settings > Profiles > Colors`

デフォルトで入っているカラースキームを選択します。
おすすめは`Solarized Dark`です。

① 　こちらのプルダウンからカラーを選択できます。`Solarized Dark`以外にもいくつかあるのでお好みで選択してください

![iterm color](https://res.cloudinary.com/dzlhvpfmo/image/upload/v1695399114/syu-blog/iterm_color_uotsik.png)

:::message
カラースキームはインポートすることで増やすこともできます。
ファイルをダウンロードしてプルダウンのimportから追加できます。

自分の使用テーマ
https://github.com/QuentinWatt/dark-flat-iterm-colors
:::

## oh-my-zshとpowerlevel10k

### oh-my-zsh

oh-my-zshとはshellの一種であるzshのフレームワークです。
コマンドを打つだけでインストールでき、すぐ見た目も変わります。
https://ohmyz.sh/

下記コマンドでインストールされます。

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

:::message alert
上記コマンドでインストールする前に.zshrcが書きかわるので、
バックアップをとっておきましょう。
~/.oh-my-zsh/custom/my.zsh に元の.zshrcの設定等を記載すれば反映できます。
:::

### powerlevel10k

zshのテーマです。
https://github.com/romkatv/powerlevel10k
下記コマンドでリポジトリからcloneします。

```
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

その後`.zshrc`内に`ZSH_THEME`の記述があると思いますが、そちらを
`ZSH_THEME="powerlevel10k/powerlevel10k"`に変更してください

もう一度ターミナルを立ち上げると、テーマを設定するウィザード画面となるので、
選択肢に従ってお好きなデザインを設定してみてください。

## tmux

tmuxとはターミナルの画面を管理できるツールとなります。
プラグインでテーマも変更できるので導入していきます。

homebrewでインストール

```shell
$ brew install tmux
```

設定ファイルの作成

```shell
$ touch ~/.tmux.conf
```

### tpmとtmux-powerline

tmuxのプラグインマネージャーである[tpm](https://github.com/tmux-plugins/tpm)でtmuxのテーマを変更します。
テーマは[tmux-powerline](https://github.com/erikw/tmux-powerline)を使用します。

tpmのリポジトリをgit cloneします。

```shell
$ git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
```

.tmux.confに以下を追加

```conf:tmux.conf
# List of plugins
set -g @tpm_plugins '           \
   tmux-plugins/tpm             \
   tmux-plugins/tmux-sensible   \
   erikw/tmux-powerline         \
 '
# tpmの初期化（tmux.confの下の方に記述する）
run '~/.tmux/plugins/tpm/tpm'

```

設定変更後、下記コマンドを実行して.tmux.confの記載を反映

```shell
$ tmux source ~/.tmux.conf
```

tmuxのprefixキーの後`i`を押すと記載したプラグインがインストールできます。

## tmux-powerlineの表示変更

個人的にデフォルトだといらない部分もあったので、
カスタムできる設定で使用しています。

### 設定

設定ファイルの作成を下記コマンドで実行します。

```shell
~/.config/tmux/plugins/tmux-powerline/generate_rc.sh
```

ホームディレクトリに`.tmux-powerlinerc.default`というファイルが作成されるので、
`.tmux-porerlinerc`にリネームして編集することで独自の設定を適用できます。

### テーマの変更

下記コマンドを実行してください

```shell
$ mkdir -p ~/.config/tmux-powerline/themes
$ cp ~/.config/tmux/plugins/tmux-powerline/themes/default.sh ~/.config/tmux-powerline/themes/my-theme.sh
```

先ほど作成した.tmux-powerlinercの`TMUX_POWERLINE_THEME`を`my-theme`に設定

`.config/tmux-power-line/themes/my-thene.sh`を編集してカスタマイズできます。

自分はpwdとcurrent_branch, painやwindowの数のみ表示しています。
ここは表示したいものを表示すればいいと思います。

```sh :my-theme.sh
if [ -z $TMUX_POWERLINE_LEFT_STATUS_SEGMENTS ]; then
	TMUX_POWERLINE_LEFT_STATUS_SEGMENTS=(
		"tmux_session_info 148 234" \
		#"hostname 33 0" \
		#"ifstat 30 255" \
		#"ifstat_sys 30 255" \
		#"lan_ip 24 255 ${TMUX_POWERLINE_SEPARATOR_RIGHT_THIN}" \
		#"wan_ip 24 255" \
		#"vcs_branch 29 88" \
		#"vcs_compare 60 255" \
		#"vcs_staged 64 255" \
		#"vcs_modified 9 255" \
		#"vcs_others 245 0" \
	)
fi

if [ -z $TMUX_POWERLINE_RIGHT_STATUS_SEGMENTS ]; then
	TMUX_POWERLINE_RIGHT_STATUS_SEGMENTS=(
		#"earthquake 3 0" \
		#"pwd 89 211" \
		#"macos_notification_count 29 255" \
		#"mailcount 9 255" \
		#"now_playing 234 37" \
		#"cpu 240 136" \
		#"load 237 167" \
		"pwd #b4637a 0 " \
		"vcs_branch #b4637a 0  ${TMUX_POWERLINE_SEPARATOR_LEFT_THIN}" \
		#"mailcount 9 255" \
		#"now_playing #ebbcba 0" \
		#"tmux_mem_cpu_load 234 136" \
		#"battery 137 127" \
		#"weather 37 255" \
		#"rainbarf 0 ${TMUX_POWERLINE_DEFAULT_FOREGROUND_COLOR}" \
		#"xkb_layout 125 117" \
		#"date_day 235 136" \
		#"date 235 136 ${TMUX_POWERLINE_SEPARATOR_LEFT_THIN}" \
		#"time 235 136 ${TMUX_POWERLINE_SEPARATOR_LEFT_THIN}" \
		#"utc_time 235 136 ${TMUX_POWERLINE_SEPARATOR_LEFT_THIN}" \
	)
fi
```

## おわりに

今回はターミナルの見た目を良くする物を紹介いたしました。
ツールの使い方等についてはご説明しておりませんが、
また記事にしていこうと思います。
一度設定してしまえば、ずっと使用できるので、
是非カスタマイズをしてみてください！
