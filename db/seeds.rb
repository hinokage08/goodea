# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

20.times do |n|
    user = User.new(email: "test#{n}@yahoo.co.jp", name: "test#{n}", password: "testuser#{n}", profile: "よろしく")
    user.save!
end

20.times do |n|
    idea = Idea.new(title: "鬼滅の刃のアクセサリー", content: "testest#{n}", category_ids: ["1"], tag_list: "鬼滅の刃", user_id: User.first.id + n)
    idea.save!
end