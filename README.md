# flux-dipatcherjs-sample
FluxでのReact実装サンプル（かなり簡易版）

できる限り最小構成になるよう心がけたが、結局Node.jsのEventEmitterも使うことになった。


## デモ
フォームに入力したテキストを表示させるだけのもの。

http://jsrun.it/maechabin/27Bi

## サンプルソース
[app.js](https://github.com/maechabin/flux-dipatcherjs-sample/blob/master/app.js)

## サンプルの確認

### サンプルのダウンロード
~~~
$ git clone git@github.com:maechabin/flux-dipatcherjs-sample.git flux-sample
~~~

### サンプルをcloneしたディレクトリに移動して、必要なパッケージのインストール
~~~
$ cd flux-sample
$ npm install
~~~

### サンプルを開く
~~~
$ open index.html
~~~

## サンプルの修正

### 「app.js」を修正したら、以下のコマンドを実行
~~~
$ browserify app.js -o build.js
~~~

### サンプルを開く
~~~
$ open index.html
~~~





