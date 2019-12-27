require 'rails_helper'
require 'support/utilities'

RSpec.describe Idea, type: :model do

  before do
    @user = User.new(name: '成功テスト', email: 'success@yahoo.co.jp', password: 'testtest')
    %W[フィギュア キーホルダー・ストラップ 缶バッジ 雑貨 アパレルアイテム アクセサリー コスメ関連 文具デスク用品 その他].each { |sample| Category.create(name: sample) }
  end


  it "titleが空ならバリデーションが通らない" do
    idea = Idea.new(title: '', content: '失敗テスト', category_ids: '1', tag_list: '鬼滅の刃', user: @user)
    expect(idea).not_to be_valid
  end

  it "contentが空ならバリデーションが通らない" do
    idea = Idea.new(title: '失敗テスト', content: '', category_ids: '1', tag_list: '鬼滅の刃', user: @user)
    expect(idea).not_to be_valid
  end

  it "category_idsが空ならバリデーションが通らない" do
    idea = Idea.new(title: '失敗テスト', content: '失敗テスト', category_ids: '', tag_list: '鬼滅の刃', user: @user)
    expect(idea).not_to be_valid
  end

  it "tag_listが空ならバリデーションが通らない" do
    idea = Idea.new(title: '失敗テスト', content: '失敗テスト', category_ids: '1', tag_list: '', user: @user)
    expect(idea).not_to be_valid
  end

  it "全ての値が入力されていればバリデーションが通る" do
    idea = Idea.new(title: '失敗テスト', content: '失敗テスト', category_ids: '1', tag_list: '鬼滅の刃', user: @user)
    expect(idea).to be_valid
  end
end