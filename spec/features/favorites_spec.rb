require 'rails_helper'
require 'support/utilities'

RSpec.feature "お気に入り機能", type: :feature do

    background do
      @user1 = FactoryBot.create(:first_user)
      @user2 = FactoryBot.create(:second_user)
      %W[フィギュア キーホルダー・ストラップ 缶バッジ 雑貨 アパレルアイテム アクセサリー コスメ関連 文具デスク用品 その他].each { |sample| Category.create(name: sample) }
      @idea1 = FactoryBot.create_list(:idea, 100)
      @idea2 = FactoryBot.create(:second_idea)
      log_in(@user1)
    end

    scenario "お気に入りのテスト" do
      visit idea_path(@idea2)
      click_on('お気に入りする')
      expect(page).to have_content 'test_02さんのアイデアをお気に入りしました'
    end

    scenario "お気に入り解除のテスト" do
      visit idea_path(@idea2)
      click_on('お気に入りする')
      save_and_open_page
      click_on('お気に入り解除')
      expect(page).to have_content 'アイデアのお気に入りを解除しました'
    end

    scenario "マイページからのお気に入り解除のテスト" do
      visit idea_path(@idea2)
      click_on('お気に入りする')
      click_on('お気に入り解除')
      expect(page).to have_content 'アイデアのお気に入りを解除しました'
    end

    scenario "トップページのランキングが、お気に入り数が高いアイデア順に並んでいるかのテスト" do
      visit idea_path(@idea2)
      click_on('お気に入りする')
      visit top_ideas_path
      page.all("#rank_img")[0].click_link
      expect(page).to have_content 'test_02'
    end
end
