# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

category = ["フィギュア", "キーホルダー・ストラップ", "缶バッジ", "雑貨", "アパレルアイテム", "アクセサリー", "コスメ", "文具デスク用品", "その他"]
category.each { |sample| Category.create(name: sample) }

anime_title = ["鬼滅の刃", "プリンセスコネクト", "僕のヒーローアカデミア", "ドラえもん", "ポケットモンスター", "ラブライブ", "アイドルマスター", "刀剣乱舞", "GRANBLUE FANTASY"]

20.times do |i|
  i += 1
  user = User.new(
    email: "test#{i}@yahoo.co.jp", 
    name: "test#{i}", 
    password: "testuser#{i}", 
    profile: "よろしく",
  )
  user.save!

  5.times do |j|
    j += 1
    anime_num = rand(0..8)
    ca_num = rand(0..7)
    idea = Idea.new(
      title: "#{anime_title[anime_num]}の#{category[ca_num]}", 
      content: "このデザインのグッズが欲しい", 
      category_ids: ["#{ca_num + 1}"], 
      tag_list: "#{anime_title[anime_num]}", 
      user_id: i,
      image: open("./db/picture/image#{ca_num + 1}.png")
    )
    idea.save!
    Favorite.create(idea_id: i, user_id: j)
  end
end


