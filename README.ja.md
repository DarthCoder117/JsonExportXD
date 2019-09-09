# ![JSON](images/header.png)

JSONでAdobe XDデザインのエクスポートが可能になります。

* [English](README.md)
* [日本語](#)

## 使い方

1. メニューから「プラグイン -> JSON Export」を選択
2. ファイル名を選択
3. 完了!

## 出力例

アートボードは（メニューに行ってからホームに戻る等）お互いの２つの動作を結びつけます。ファイル出力は下記の通りです。
"screens"の配列はXDファイル内のアートボードを取り込み、 "edges"の配列はアートボード間のリンクを行います。{元のGUID} -> {対象のGUID}。

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

サポートまたは、リクエストが必要な場合、本レポジトリーにイシューを作成するか、
またはsupertanner@gmail.comにご連絡ください。
