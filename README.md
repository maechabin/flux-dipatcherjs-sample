# flux-dipatcherjs-sample
FluxでのReact実装サンプル（かなり簡易版）

できる限り最小構成になるよう心がけたが、結局Node.jsのEventEmitterも使うことになった。

[詳細]<br>
Reactの単純なサンプルでFluxの実装を解説
http://mae.chab.in/archives/2747

## デモ
フォームに入力したテキストを表示させるだけのもの。

http://jsrun.it/maechabin/27Bi

## サンプルソース
- [flux-app.js](https://github.com/maechabin/flux-dipatcherjs-sample/blob/master/src/flux-app.js)
- [flux.html](https://github.com/maechabin/flux-dipatcherjs-sample/blob/master/sample/flux.html)

## サンプルの確認

### 1. サンプルのダウンロード
~~~
$ git clone git@github.com:maechabin/flux-dipatcherjs-sample.git flux-sample
~~~

### 2. サンプルをcloneしたディレクトリに移動して、必要なパッケージのインストール
~~~
$ cd flux-sample
$ npm install
~~~

### 3. サンプルを開く
~~~
$ open ./sample/flux.html
~~~

## サンプルの修正

### 1. 「.src/flux-app.js」を修正したら、以下のコマンドを実行
~~~
$ browserify ./src/flux-app.js -o ./dist/flux-build.js
~~~

※browserifyがシステムにインストールされていない場合は、以下コマンドでインストール
~~~
$ npm install -g browserify
~~~

### 2. サンプルを開く
~~~
$ open ./sample/flux.html
~~~
