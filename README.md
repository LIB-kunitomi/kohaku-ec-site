# KOHAKU EC サイト（試作）

架空のレザーブランド「KOHAKU」のECサイトの試作です。HTML 1枚（`kohaku-shop.html`）で動きます。

## できること
- カテゴリでの絞り込み、並び替え、キーワード検索
- 商品詳細：カラー選択（商品画像の色も変わる）、イニシャル刻印、ギフト包装
- カート：数量変更・削除、送料無料（¥22,000以上）までの残り金額の表示。中身はブラウザに保存
- 購入手続きとニュースレター登録はデモのため送信しません

## 手元で見る
```
node .claude/serve.js
```
http://localhost:5178 を開きます。公開時と同じ枠（doctype・viewport など）を付けて表示します。

## 公開ページ
- GitHub Pages：https://lib-kunitomi.github.io/kohaku-ec-site/
  - main に push すると、GitHub Actions（`.github/workflows/pages.yml`）が `scripts/build.js` で `_site/index.html` を作って自動で公開します。
- Claude の Artifact としても公開しています（非公開・共有はページの共有メニューから）。
