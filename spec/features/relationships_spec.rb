require 'rails_helper'
require 'support/utilities'

RSpec.feature "フォロー機能", type: :feature do
    background do
        @user1 = FactoryBot.create(:first_user)
        @user2 = FactoryBot.create(:second_user)
        %W[フィギュア キーホルダー・ストラップ 缶バッジ 雑貨 アパレルアイテム アクセサリー コスメ関連 文具デスク用品 その他].each { |sample| Category.create(name: sample) }
        @idea1 = FactoryBot.create(:idea)
        @idea3 = FactoryBot.create(:third_idea)
        log_in(@user1)
    end

    scenario "フォローのテスト" do
        visit user_path(@user2)
        click_on('フォロー')
        visit user_path(@user2)
        save_and_open_page
        expect(page).not_to have_content('フォロー')
    end
end