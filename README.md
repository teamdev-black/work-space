# Tetris

クラシックなテトリスゲームをモダンテイストに実装。JavaScriptで構築され、公式テトリスガイドラインに準拠しています。
[ゲームプレイ](https://teamdev-black.github.io/Tetris/)

https://github.com/user-attachments/assets/d3920670-ffe5-41b5-80dc-1c2757d46152

## 特徴

- 7種類の標準的なテトリミノを使用したクラシックなテトリスゲームプレイ
- ガイドラインに準拠した、本格的なゲーム性
  - 配置を容易にするゴーストピース機能
  - ホールド機能
  - T-Spinの検出とボーナススコアリング
  - COMBOとBack-to-Backシステム
  - スーパーローテーションシステム（SRS）
  - 15回の移動でリセットされるロックディレイ
  - レベル進行に応じたスコアリングシステム
- モダンなテイストのUI
  - トップ画面
    ![image](https://github.com/user-attachments/assets/703c1401-38c8-47b5-a186-b4c9e23750c2)
  - ゲーム画面
    - 次のテトリミノ表示（3ピース以上）
    - ホールドミノ表示
    - T-Spin,Mini-T-Spin, Combo, Back-to-Back時のエフェクト表示
    - TETRIS(4列)消し時のエフェクト表示
    ![image](https://github.com/user-attachments/assets/97592a1d-bc4b-45c1-95a4-99438f8853a1)

  - ゲームオーバー画面
    ![image](https://github.com/user-attachments/assets/166a451a-0370-428c-a088-728e38eadaab)


## ファイル構造

```
.
├── .git
├── .github
├── css
├── docs
├── js
├── sounds
├── index.html
└── README.md
```

## はじめ方

1. リポジトリをクローンします：
   ```
   git clone https://github.com/yourusername/tetris-game.git
   ```
2. `index.html`をウェブブラウザで開いてプレイを開始します。

## 遊び方

- 矢印キーでテトリミノを操作します：
  - 左/右：水平移動
  - 下：ソフトドロップ
  - 上：時計回りに回転
- スペース：ハードドロップ
- C：ホールド
- P：ゲーム一時停止

## ゲームモード

1. マラソン：難易度が上がる15レベルをクリア

## スコアシステム

| Action               | Action Total               | 説明                                                    |
|----------------------|----------------------------|---------------------------------------------------------|
| Single               | 100 × Level                | 1行のブロックが消去される。                             |
| Double               | 300 × Level                | 2行のブロックが同時に消去される。                       |
| Triple               | 500 × Level                | 3行のブロックが同時に消去される。                       |
| Tetris               | 800 × Level                | 4行のブロックが同時に消去される。                       |
| Mini T-Spin          | 100 × Level                | ライン消去なしの簡単なTスピン。                         |
| Mini T-Spin Single   | 200 × Level                | 1行のブロックを消去する簡単なTスピン。                 |
| T-Spin               | 400 × Level                | T字型ブロックがライン消去なしでTスロットに挿入される。 |
| T-Spin Single        | 800 × Level                | 1行のブロックを消去するTスピン。                       |
| T-Spin Double        | 1200 × Level               | 2行のブロックを同時に消去するTスピン。                 |
| T-Spin Triple        | 1600 × Level               | 3行のブロックを同時に消去するTスピン。                 |
| Back-to-Back Bonus   | 0.5 × Action Total         | 連続して行われるテトリス、Tスピンライン消去、ミニTスピンライン消去に対するボーナス。詳細はバック・トゥ・バックの説明を参照。 |
| Drop            | 1 × Level                      | テトリミノがドロップされる。             |


## 開発

このプロジェクトはJavaScript、HTML、CSSを使用しています。貢献するには：

1. リポジトリをフォークする
2. フィーチャーブランチを作成：`git checkout -b feature/追加する機能`
3. 変更をコミット：`git commit -m '新機能を追加'`
4. ブランチにプッシュ：`git push origin feature/機能名`
5. プルリクエストを開く
## 謝辞

- ゲームメカニクスとガイドラインについては[Tetris Wiki](https://tetris.wiki)を参照しました
- 公式ルールと仕様については[テトリスガイドライン](https://tetris.wiki/Tetris_Guideline)を参照しました

## 課題
- 重複機能があるため、リファクタリング
- 各機能のクラス化と適切なファイル分割 

## 開発者
- [stshf](https://github.com/stshf)
- [uki-t66](https://github.com/uki-t66)
- [yuugineer](https://github.com/yuugineer)

これらの機能への貢献や新しい機能の提案を歓迎します！
