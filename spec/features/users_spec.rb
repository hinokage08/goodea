require 'rails_helper'
require 'support/utilities'

RSpec.feature "ユーザー機能", type: :feature do
  background do
    @user1 = FactoryBot.create(:first_user)
    @user2 = FactoryBot.create(:second_user)
    %W[フィギュア キーホルダー・ストラップ 缶バッジ 雑貨 アパレルアイテム アクセサリー コスメ関連 文具デスク用品 その他].each { |sample| Category.create(name: sample) }
    @idea1 = FactoryBot.create_list(:idea, 105)
  end
  scenario "ユーザー登録のテスト" do
    visit new_user_registration_path
    fill_in "user_name",with: 'test_user'
    fill_in "メールアドレス",with:"test@yahoo.co.jp"
    fill_in "パスワード",with:"testtest"
    fill_in "パスワード(確認用)",with:"testtest"
    click_button 'アカウント登録'
    expect(page).to have_content "test_user"
  end
  scenario "ログイン確認テスト" do
    log_in(@user2)
    visit user_path(@user2.id)
    expect(page).to have_content "test_02"
  end

  scenario "ログアウト確認テスト" do
    log_in(@user2)
    click_link 'ログアウト'
    expect(page).to have_content "ログアウトしました"
  end

  scenario  "ログインしていないのにアイデア投稿等のページに飛ぼうとした場合は、ログインページに遷移する" do
    visit new_idea_path
    expect(page).to have_content 'アカウント登録もしくはログインしてください'
  end

  scenario "ユーザー登録した時、同時にログインも行われるかのテスト" do
    visit new_user_registration_path
    fill_in "user_name",with: 'test_user'
    fill_in "メールアドレス",with:"test@yahoo.co.jp"
    fill_in "パスワード",with:"testtest"
    fill_in "パスワード(確認用)",with:"testtest"
    click_button 'アカウント登録'
    expect(page).to have_content "アイデア投稿"
  end
  
  scenario "自分以外のユーザーのマイページを開くと、プロフィール編集のリンクが非表示になっているかのテスト" do
    log_in(@user1)
    visit user_path(@user2.id)
    expect(page).to_not have_content "プロフィール編集"
    visit user_path(@user1.id)
    expect(page).to have_content "プロフィール編集"
  end

  scenario "マイページに投稿したアイデアが表示されているかのテスト" do
    log_in(@user1)
    visit user_path(@user1.id)
    
  end
end
