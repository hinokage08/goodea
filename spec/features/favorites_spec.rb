require 'rails_helper'
require 'support/utilities'

RSpec.feature "お気に入り機能", type: :feature do

    background do
        @user1 = FactoryBot.create(:first_user)
        @user2 = FactoryBot.create(:second_user)
        %W[フィギュア キーホルダー・ストラップ 缶バッジ 雑貨 アパレルアイテム アクセサリー コスメ関連 文具デスク用品 その他].each { |sample| Category.create(name: sample) }
        @idea1 = FactoryBot.create(:idea)
        @idea2 = FactoryBot.create(:second_idea)
        log_in(@user1)
    end

    scenario "お気に入りのテスト" do
        visit idea_path(@idea2)
        click_on('お気に入りする')
        expect(page).to have_content 'test_02さんのアイデアをお気に入り登録しました'
    end

    scenario "トップページのランキングが、お気に入り数が高いアイデア順に並んでいるかのテスト" do
        visit idea_path(@idea2)
        click_on('お気に入りする')
        visit top_ideas_path
        save_and_open_page
        page.all("#rank")[0].click
        expect(page).to have_content 'test_02'
    end

end
