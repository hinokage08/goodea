require 'rails_helper'
require 'support/utilities'

RSpec.feature "アイデア投稿機能", type: :feature do
  
  background do
    @user1 = FactoryBot.create(:first_user)
    @user1 = FactoryBot.create(:second_user)
    %W[フィギュア キーホルダー・ストラップ 缶バッジ 雑貨 アパレルアイテム アクセサリー コスメ関連 文具デスク用品 その他].each { |sample| Category.create(name: sample) }
    @idea1 = FactoryBot.create(:idea)
    @idea2 = FactoryBot.create(:second_idea)
    log_in(@user1)
  end

  scenario "トップページのテスト" do
    visit top_ideas_path
    expect(page).to have_content 'test_01'
    expect(page).to have_content 'test_02'
  end

  scenario "アイデア作成のテスト" do
    visit new_idea_path
    fill_in 'title', with: 'test_idea'
    fill_in 'idea_content', with: 'test'
    check 'idea_category_ids_1'
    fill_in 'idea_tag', with: '鬼滅の刃'
    click_button '投稿する'
    expect(page).to have_content 'test_idea'
    expect(page).to have_content '鬼滅の刃'
  end

  scenario "アイデア詳細のテスト" do
    visit idea_path(@idea1)
    expect(page).to have_content 'test_01'
    expect(page).to have_content 'testtest_01'
  end

  #scenario "トップページの最新アイデア一覧が降順に並んでいるかのテスト" do
    #visit top_ideas_path
    #idea = find_by_id('')
    #idea_0 = idea[0]
    #expect(idea_0).to have_content 'test_02'
  #end

  scenario "タグ検索のテスト" do
    visit new_idea_path
    fill_in 'search-btn', with: '鬼滅の刃'
    click_on '検索'
    expect(page).to have_content 'test_01'
  end
end
