# KOHAKU EC サイト（試作）

架空のレザーブランド「KOHAKU」のECサイトの試作です。HTML 1枚（`kohaku-shop.html`）で動きます。

## できること
- ヘッダーのメガメニュー（種類・特集・おすすめ商品）、スマホではハンバーガーメニュー（アコーディオン）
- トップの特集スライド（3枚・自動送り／一時停止）、ウィンターセールの帯と横スクロールのセール商品
- 一覧のカラー見本にカーソルを当てる（タップする）と商品画像の色が切り替わる
- 初回訪問時のクーポン（ニュースレター）ポップアップ。1度閉じると、そのブラウザでは出ない
- カテゴリ・種類（トート、長財布など）・新作／セール／ギフト・¥20,000以下での絞り込み、並び替え、キーワード検索
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
- Vercel：https://kohaku-ec-site.vercel.app （チーム LIB の kohaku-ec-site プロジェクト）
  - 手元から `vercel deploy --prod --scope lib-5343` で公開します。ビルド設定は `vercel.json`（`scripts/build.js` で `_site` を作る）。
- Claude の Artifact としても公開しています（非公開・共有はページの共有メニューから）。
