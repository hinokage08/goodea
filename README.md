# README
## goodea!(グッディア!)
---
### 概要
「好きなアニメ・ゲーム・漫画のグッズが欲しいなぁ…でもあまり良い感じのグッズが販売されてなくて悲しい」  
こんな経験ありませんか？  
「俺（私）だったら、こんなデザインのこういうグッズがあれば買うんだけどなぁ」  
あなたが考えたそのアイデア共有してみませんか？みんなが欲しいと思うグッズが企業の目に泊まれば商品化も不可能じゃない…？  
欲しいグッズのアイデアを共有するアプリです  

### コンセプト  
---  
アニメ・漫画・ゲーム etc..の欲しいグッズのアイデア共有アプリ

### バージョン  
---  
Ruby 2.6.5  
Rails 5.2.3

### 機能一覧  
---  
- ログイン機能  
    - メールアドレス、パスワードでログインできる  
    - Twitterアカウントでログインできる  
- ユーザー登録機能  
    - ユーザー名、メールアドレス、パスワードは必須  
- アイデア投稿・保存機能
    - 画像アップロード機能
    - リッチテキストコンテンツ編集機能
    - カテゴリ設定
    - タグ設定
- アイデア一覧機能
    - 投稿されたアイデアにはユーザー名、サムネイル、カテゴリ、タグ、お気に入り(いいね)数表示
    -  ランキング表示
    -  検索窓表示
- アイデア編集機能
- アイデア削除機能
- 検索機能
    - カテゴリ検索
    - タグ検索
    - タイトル、コンテント検索
    - ユーザー検索
- ページネーション機能
- お気に入り(いいね)機能
- ランキング機能
    - カテゴリ、タグ毎のランキング
    - ユーザーフォロー機能
- タグ(ラベル)機能
    - アイデア投稿ページでタグの編集・追加ができる
- カテゴリ機能
    - アイデア投稿ページでタグの編集・追加ができる
- コメント機能
- SNS連携機能(投稿した内容をSNSにリンク付きでツイートできる)  
## カタログ設計  
---  
https://docs.google.com/spreadsheets/d/1nwZebA3X9Ebh8Tr7KbmF_GQhM9mq58KZ7rRuINe-G1I/edit#gid=0  

## テーブル設計
---  
https://docs.google.com/spreadsheets/d/1nwZebA3X9Ebh8Tr7KbmF_GQhM9mq58KZ7rRuINe-G1I/edit#gid=4011921

### ER図  
--- 
https://docs.google.com/spreadsheets/d/1nwZebA3X9Ebh8Tr7KbmF_GQhM9mq58KZ7rRuINe-G1I/edit#gid=1069932806  

### ページ遷移図  
---  
https://docs.google.com/spreadsheets/d/1nwZebA3X9Ebh8Tr7KbmF_GQhM9mq58KZ7rRuINe-G1I/edit#gid=1505273493  

### ワイヤーフレーム  
---  
https://docs.google.com/spreadsheets/d/1nwZebA3X9Ebh8Tr7KbmF_GQhM9mq58KZ7rRuINe-G1I/edit#gid=604193750  

### 使用予定Gem  
---  
- ログイン系  
kaminari  
acts-as-taggable-on  
devise  
devise-i18n  
devise-i18n-views  
omniauth  
omniauth-Twitter  
- 検索機能  
ransack  
- 画像アップロード  
carrierwave  
mini_magick  
- タグ機能  
acts-as-taggable-on  
- アイデア投稿機能  
tinymce-rails
