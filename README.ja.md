# ![JSON](images/header.png)

JSONでAdobe XDデザインをエクスポート

* [English](README.md)
* [日本語](#)

## 使い方

1. メニューから「プラグイン -> JSON Export」を選択する。
2. ファイル名を選ぶ。
3. 完了!

## 出力玲

２つアートボードがある（メニューに行ける、またホームに戻れる）ファイルの出力は下記の通りです。
"screens"という配列の中にはXDファイルのアートボードで、 "edges"はアートボード間のリンクです{元のGUID} -> {対象のGUID}。

```json
{
  "screens": [
    {
      "guid": "c77559d54862410fa5e0ab01e822d257",
      "name": "ホーム",
      "type": "Artboard"
    },
    {
      "guid": "bcc81496e1a1478d98e39197b7e345c4",
      "name": "メニュー",
      "type": "Artboard"
    },
  ],
  "edges": {
    "c77559d54862410fa5e0ab01e822d257": [
      "bcc81496e1a1478d98e39197b7e345c4"
    ],
    "bcc81496e1a1478d98e39197b7e345c4": [
      "c77559d54862410fa5e0ab01e822d257"
    ]
  }
}
```

## サポート

サーポート、フィーチャーリクエスト、などのため、本レポジトリーにイシューを作成して、
またはsupertanner@gmail.comにメールしてください。
