FactoryBot.define do
    factory :category do
        name { "キーホルダー・ストラップ" }
    end
    
    factory :first_category, class: Category do
        name { "フィギュア" }
    end
end